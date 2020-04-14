import  staticDecodeURIComponent from '../static/staticDecodeURIComponent'

import  arrayEach from '../array/arrayEach'

import  isString from '../base/isString'

/**
 * 查询参数序列化
 *
 * @param {String} query 反序列化的字符串
 */
function unserialize (str) {
  var items
  var result = {}
  if (str && isString(str)) {
    arrayEach(str.split('&'), function (param) {
      items = param.split('=')
      result[staticDecodeURIComponent(items[0])] = staticDecodeURIComponent(items[1] || '')
    })
  }
  return result
}

export default unserialize
