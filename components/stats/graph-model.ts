import { DateFilter } from "../date-filters/date-filter";
import { firestore } from '@/services/firebase-init';
import {startOfDay, format, getTime} from 'date-fns';


const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export async function getData(dateFilter: DateFilter) {
  console.log({dateFilter});

  const querySnapshot = await firestore.collection('arduino_electricity_push_test')
    .orderBy('created_time')
    .where('created_time', '>=', getTime(dateFilter.dates.firstDate))
    .where('created_time', '<=', getTime(dateFilter.dates.lastDate))
    .get();

  const data: Array<any> = [];

  querySnapshot.forEach(function(doc) {
    // doc.data() is never undefined for query doc snapshots
    const d = doc.data();
    if (dateFilter.format == 'eeee dd MMMM HH:mm:ss') {
      d.startOfDay = new Date(d.created_time);
    } else {
      d.startOfDay = startOfDay(d.created_time);
    }

    data.push(d);
  });

  console.log({data});

  const grouped = groupBy('startOfDay')(data);

  const aggreged = {};

  for(const key of Object.keys(grouped)) {
    const data = grouped[key];
    // @ts-ignore
    aggreged[key] = 0;

    data.forEach(d => {
      // @ts-ignore
      aggreged[key] += d.kw_per_hour;
    });
  }

  return aggreged;
};
