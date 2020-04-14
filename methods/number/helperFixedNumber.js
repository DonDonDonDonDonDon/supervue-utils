import  helperNumString from './helperNumString'
import  toNumber from './toNumber'

function helperFixedNumber (str, digits) {
  return helperNumString(toNumber(str)).replace(new RegExp('(\\d+.\\d{0,' + digits + '}).*'), '$1')
}

export default helperFixedNumber
