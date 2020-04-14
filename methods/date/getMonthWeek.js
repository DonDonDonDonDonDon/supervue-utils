import  staticWeekTime from '../static/staticWeekTime'
import  staticStrFirst from '../static/staticStrFirst'

import  helperGetYMDTime from './helperGetYMDTime'

import  getWhatMonth from './getWhatMonth'
import  toStringDate from './toStringDate'
import  getWhatWeek from './getWhatWeek'

import  isDate from '../base/isDate'

/**
  * 返回某个月的第几周
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getMonthWeek (date) {
  var monthFirst, monthFirstWeek
  var currentDate = toStringDate(date)
  if (isDate(currentDate)) {
    monthFirst = getWhatMonth(currentDate, 0, staticStrFirst)
    monthFirstWeek = getWhatWeek(monthFirst, 0, 1)
    if (monthFirstWeek < monthFirst) {
      monthFirstWeek = getWhatWeek(monthFirst, 1, 1)
    }
    if (currentDate >= monthFirstWeek) {
      return Math.floor((helperGetYMDTime(currentDate) - helperGetYMDTime(monthFirstWeek)) / staticWeekTime) + 1
    }
    return getMonthWeek(getWhatWeek(currentDate, 0, 1))
  }
  return currentDate
}

export default getMonthWeek
