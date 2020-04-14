import  staticEscapeMap from '../static/staticEscapeMap'

import  helperFormatEscaper from './helperFormatEscaper'

import  each from '../base/each'

var unescapeMap = {}
each(staticEscapeMap, function (item, key) {
  unescapeMap[staticEscapeMap[key]] = key
})

/**
  * 反转escape
  *
  * @param {String} str 字符串
  * @return {String}
  */
var unescape = helperFormatEscaper(unescapeMap)

export default unescape
