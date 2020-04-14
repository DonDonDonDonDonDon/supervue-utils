import  toValString from './toString'
import  keys from '../base/keys'

function helperFormatEscaper (dataMap) {
  var replaceRegexp = new RegExp('(?:' + keys(dataMap).join('|') + ')', 'g')
  return function (str) {
    return toValString(str).replace(replaceRegexp, function (match) {
      return dataMap[match]
    })
  }
}

export default helperFormatEscaper
