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

export const getMonthBoundaries = (date: Date) => getDateBoundary(date, startOfMonth, endOfMonth)
export const getWeekBoundaries = (date: Date) => getDateBoundary(date, startOfWeek, endOfWeek)
export const getYearBoundaries = (date: Date) => getDateBoundary(date, startOfYear, endOfYear)
export const getDayBoundaries = (date: Date) => getDateBoundary(date, startOfDay, endOfDay)

export function getLastMonthBoundaries() {
  const now = new Date()
  const lastMonth = subMonths(now, 1)

  return getMonthBoundaries(lastMonth)
}

export function getLastWeekBoundaries() {
  const now = new Date()
  const lastWeek = subWeeks(now, 1)

  return getWeekBoundaries(lastWeek)
}

export function getLastYearBoundaries() {
  const now = new Date()
  const lastYear = subYears(now, 1)

  return getYearBoundaries(lastYear)
}

export function getLastDayBoundaries() {
  const now = new Date()
  const lastDay = subDays(now, 1)

  return getDayBoundaries(lastDay)
}
