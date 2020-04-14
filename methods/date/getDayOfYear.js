import  getWhatYear from './getWhatYear'
import  toStringDate from './toStringDate'

import  isDate from '../base/isDate'
import  isLeapYear from '../base/isLeapYear'

/**
  * 返回某个年份的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} year 年(默认当年)、前几个年、后几个年
  * @return {Number}
  */
function getDayOfYear (date, year) {
  date = toStringDate(date)
  if (isDate(date)) {
    return isLeapYear(getWhatYear(date, year)) ? 366 : 365
  }
  return date
}

export default getDayOfYear
