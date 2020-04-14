import  staticDayTime from '../static/staticDayTime'
import  staticStrFirst from '../static/staticStrFirst'
import  staticStrLast from '../static/staticStrLast'

import  helperGetDateTime from './helperGetDateTime'

import  getWhatMonth from './getWhatMonth'
import  toStringDate from './toStringDate'

import  isDate from '../base/isDate'

/**
  * 返回某个月份的天数
  *
  * @param {Date} date 日期或数字
  * @param {Number} month 月(默认当月)、前几个月、后几个月
  * @return {Number}
  */
function getDayOfMonth (date, month) {
  date = toStringDate(date)
  if (isDate(date)) {
    return Math.floor((helperGetDateTime(getWhatMonth(date, month, staticStrLast)) - helperGetDateTime(getWhatMonth(date, month, staticStrFirst))) / staticDayTime) + 1
  }
  return date
}

export default getDayOfMonth
