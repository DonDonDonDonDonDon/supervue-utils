import  eqNull from '../base/eqNull'
import  isNumber from '../base/isNumber'
import  helperNumString from '../number/helperNumString'

function toValString (obj) {
  if (isNumber(obj)) {
    return helperNumString(obj)
  }
  return '' + (eqNull(obj) ? '' : obj)
}

export default toValString
