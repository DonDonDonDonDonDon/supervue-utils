import  toNumber from './toNumber'
import  toInteger from './toInteger'
import  helperFixedNumber from './helperFixedNumber'

/**
 * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回数值
 *
 * @param { String/Number } str 数值
 * @return {String}
 */
function toFixedNumber (str, digits) {
  var rest = (digits ? toNumber : toInteger)(helperFixedNumber(str, digits))
  return rest === 0 ? 0 : rest
}

export default toFixedNumber
