import  helperNumberDecimal from './helperNumberDecimal'
import  helperNumString from './helperNumString'
import  multiply from './multiply'

function helperNumberAdd (addend, augend) {
  var str1 = helperNumString(addend)
  var str2 = helperNumString(augend)
  var ratio = Math.pow(10, Math.max(helperNumberDecimal(str1), helperNumberDecimal(str2)))
  return (multiply(addend, ratio) + multiply(augend, ratio)) / ratio
}

export default helperNumberAdd
