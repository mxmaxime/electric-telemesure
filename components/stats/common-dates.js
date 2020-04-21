import {startOfWeek, endOfWeek, eachDayOfInterval, startOfMonth, endOfMonth, subMonths, format, getHours, subWeeks} from 'date-fns'

/**
 * I used this function instead of hard coded values for language translations.
 * @from: https://github.com/date-fns/date-fns/issues/644#issuecomment-351395088
 */
export function getDays() {
  const now = new Date()
  const arr = eachDayOfInterval({
    start: startOfWeek(now),
    end: endOfWeek(now)
  })

  return arr.reduce((a, d) => {
    // => "Monday"...
    a.push(format(d, 'EEEE'));
    return a;
  }, [])
}

export function getDateBoundary(date, getStart, getEnd) {
  return {
    firstDate: getStart(date),
    lastDate: getEnd(date)
  }
}

export const getMonthBoundaries = date => getDateBoundary(date, startOfMonth, endOfMonth)
export const getWeekBoundaries = date => getDateBoundary(date, startOfWeek, endOfWeek)

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
