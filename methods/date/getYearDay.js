import  staticDayTime from '../static/staticDayTime'
import  staticStrFirst from '../static/staticStrFirst'

import  helperGetYMDTime from './helperGetYMDTime'

import  getWhatYear from './getWhatYear'
import  toStringDate from './toStringDate'

import  isDate from '../base/isDate'

/**
  * 返回某个年份的第几天
  *
  * @param {Date} date 日期或数字
  * @return {Number}
  */
function getYearDay (date) {
  date = toStringDate(date)
  if (isDate(date)) {
    return Math.floor((helperGetYMDTime(date) - helperGetYMDTime(getWhatYear(date, 0, staticStrFirst))) / staticDayTime) + 1
  }
  return date
}

export default getYearDay
