import  helperNumberDecimal from './helperNumberDecimal'
import  helperNumString from './helperNumString'
import  multiply from './multiply'

function helperNumberDivide (divisor, dividend) {
  var str1 = helperNumString(divisor)
  var str2 = helperNumString(dividend)
  var divisorDecimal = helperNumberDecimal(str1)
  var dividendDecimal = helperNumberDecimal(str2)
  var powY = dividendDecimal - divisorDecimal
  var isMinus = powY < 0
  var multiplicand = Math.pow(10, isMinus ? Math.abs(powY) : powY)
  return multiply(str1.replace('.', '') / str2.replace('.', ''), isMinus ? 1 / multiplicand : multiplicand)
}

export default helperNumberDivide
