import  staticStrFirst from '../static/staticStrFirst'
import  staticStrLast from '../static/staticStrLast'

import  helperGetDateFullYear from './helperGetDateFullYear'
import  helperGetDateTime from './helperGetDateTime'
import  helperGetDateMonth from './helperGetDateMonth'

import  toStringDate from './toStringDate'
import  isDate from '../base/isDate'

/**
  * 返回前几月或后几月的日期
  *
  * @param {Date} date 日期或数字
  * @param {Number} month 月(默认当前月)、前几个月、后几个月
  * @param {Number/String} day 获取哪天(null默认当前天)、月初(first)、月末(last)、指定天数(数值)
  * @return {Date}
  */
function getWhatMonth (date, month, day) {
  var monthOffset = month && !isNaN(month) ? month : 0
  date = toStringDate(date)
  if (isDate(date)) {
    if (day || !isNaN(day)) {
      if (day === staticStrFirst) {
        return new Date(helperGetDateFullYear(date), helperGetDateMonth(date) + monthOffset, 1)
      } else if (day === staticStrLast) {
        return new Date(helperGetDateTime(getWhatMonth(date, monthOffset + 1, staticStrFirst)) - 1)
      } else {
        date.setDate(day)
      }
    }
    if (monthOffset) {
      date.setMonth(helperGetDateMonth(date) + monthOffset)
    }
  }
  return date
}

export default getWhatMonth
