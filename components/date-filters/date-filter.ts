import {getDays, FilterType, getDateBoundaries, DateBoundary} from './common-dates'

export interface DateFilter {
  choiceName: string,
  format: string,
  dates: DateBoundary
  xAxis: Array<string>
};

// export type FilterMap = {
//   [x in FilterType]? : DateFilter;
// };

export const dateFilters = {
  [FilterType.MONTH]: {
    last: {
      choiceName: `Last month`,
      format: 'eeee dd MMMM',
      dates: getDateBoundaries(FilterType.MONTH, true),
      xAxis: getDays()
    },
    current: {
      choiceName: `This month`,
      format: 'eeee dd MMMM',
      dates: getDateBoundaries(FilterType.MONTH, false),
      xAxis: getDays()
    }
  },
  [FilterType.WEEK]: {
    last: {
      choiceName: 'Last week',
      format: 'eeee dd MMMM',
      dates: getDateBoundaries(FilterType.WEEK, true),
      xAxis: getDays()
    },
    current: {
      choiceName: 'THis week',
      format: 'eeee dd MMMM',
      dates: getDateBoundaries(FilterType.WEEK, false),
      xAxis: getDays()
    }
  },
  [FilterType.DAY]: {
    last: {
      choiceName: 'Last day',
      format: 'eeee dd MMMM HH:mm:ss',
      dates: getDateBoundaries(FilterType.DAY, true),
      xAxis: getDays()
    },
    current: {
      choiceName: 'this day',
      format: 'eeee dd MMMM HH:mm:ss',
      dates: getDateBoundaries(FilterType.DAY, false),
      xAxis: getDays()
    },
  },
  [FilterType.YEAR]: {
    last: {
      choiceName: 'Last year',
      format: 'eeee dd MMMM yyyy',
      dates: getDateBoundaries(FilterType.YEAR, true),
      xAxis: getDays()
    },
    current: {
      choiceName: 'This year',
      format: 'eeee dd MMMM yyyy',
      dates: getDateBoundaries(FilterType.YEAR, false),
      xAxis: getDays()
    }
  }
}
