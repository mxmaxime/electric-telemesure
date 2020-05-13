import {getDays, getLastYearBoundaries, getLastMonthBoundaries, getLastWeekBoundaries, DateBoundary, getLastDayBoundaries} from './common-dates'

export interface DateFilter {
  choiceName: string,
  format: string,
  dates: DateBoundary
  xAxis: Array<string>
};

export enum FilterType {
  LAST_MONTH,
  LAST_WEEK,
  LAST_DAY,
  LAST_YEAR,
};

export type FilterMap = {
  [x in FilterType]? : DateFilter;
};

export const dateFilters: FilterMap = {
  [FilterType.LAST_MONTH]: {
    choiceName: 'Last month',
    format: 'eeee dd MMMM',
    dates: getLastMonthBoundaries(),
    xAxis: getDays()
  },
  [FilterType.LAST_WEEK]: {
    choiceName: 'Last week',
    format: 'eeee dd MMMM',
    dates: getLastWeekBoundaries(),
    xAxis: getDays()
  },
  [FilterType.LAST_DAY]: {
    choiceName: 'Last day',
    format: 'eeee dd MMMM HH:mm:ss',
    dates: getLastDayBoundaries(),
    xAxis: getDays()
  },
  [FilterType.LAST_YEAR]: {
    choiceName: 'Last year',
    format: 'eeee dd MMMM yyyy',
    dates: getLastYearBoundaries(),
    xAxis: getDays()
  }
}
