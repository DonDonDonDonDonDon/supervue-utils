'use strict'

import  random from './random'
import  max from './max'
import  min from './min'
import  commafy from './commafy'
import  toFixedString from './toFixedString'
import  toFixedNumber from './toFixedNumber'
import  toInteger from './toInteger'
import  toNumber from './toNumber'
import  add from './add'
import  subtract from './subtract'
import  multiply from './multiply'
import  divide from './divide'
import  sum from './sum'
import  mean from './mean'

var numberExports = {
  random: random,
  min: min,
  max: max,
  commafy: commafy,
  toFixedString: toFixedString,
  toFixedNumber: toFixedNumber,
  toNumber: toNumber,
  toInteger: toInteger,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  sum,
  mean
}

export default numberExports
