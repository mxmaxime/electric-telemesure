import {startOfDay, endOfDay, startOfYear, endOfYear, startOfWeek, endOfWeek, eachDayOfInterval, startOfMonth, endOfMonth, subMonths, format, getHours, subWeeks, subYears, subDays} from 'date-fns'

/**
 * I used this function instead of hard coded values for language translations.
 * @from: https://github.com/date-fns/date-fns/issues/644#issuecomment-351395088
 */
export function getDays(): Array<string> {
  const now = new Date()
  const arr = eachDayOfInterval({
    start: startOfWeek(now),
    end: endOfWeek(now)
  })

  return arr.reduce((a, d) => {
    // => "Monday"...
    // @ts-ignore
    a.push(format(d, 'EEEE'));
    return a;
  }, [])
}

export interface DateBoundary {
  firstDate: Date,
  lastDate: Date
}

export function getDateBoundary(date: Date, getStart: Function, getEnd: Function) {
  return {
    firstDate: getStart(date),
    lastDate: getEnd(date)
  }
}

export enum FilterType {
  MONTH,
  WEEK,
  DAY,
  YEAR,
};

const filters = {
  [FilterType.MONTH]: { getStart: startOfMonth, getEnd: endOfMonth, sub: subMonths },
  [FilterType.WEEK]: { getStart: startOfWeek, getEnd: endOfWeek, sub: subWeeks },
  [FilterType.YEAR]: { getStart: startOfYear, getEnd: endOfYear, sub: subYears },
  [FilterType.DAY]: { getStart: startOfDay, getEnd: endOfDay, sub: subDays },
}

export function getDateBoundaries(filterType: FilterType, last: boolean = false) {
  const filter = filters[filterType]
  const now = new Date()
  const date = last ? now : filter.sub(now, 1)

  const getEnd = last ? filter.getEnd : () => now

  return getDateBoundary(date, filter.getStart, getEnd)
}
