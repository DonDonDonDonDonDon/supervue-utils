import  staticParseInt from '../static/staticParseInt'

import  toValString from './toString'

/**
  * 将字符串重复 n 次
  *
  * @param {String} str 字符串
  * @param {Number} count 次数
  * @return {String}
  */
function repeat (str, count) {
  var rest = toValString(str)
  if (rest.repeat) {
    return rest.repeat(count)
  }
  var list = isNaN(count) ? [] : new Array(staticParseInt(count))
  return list.join(rest) + (list.length > 0 ? rest : '')
}

export default repeat
