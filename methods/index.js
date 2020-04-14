'use strict'

// 核心
import  SupervueUtils from './supervue-utils'

// 对象相关的方法
import  assign from './object/assign'
import  extend from './object/extend'
import  objectEach from './object/objectEach'
import  lastObjectEach from './object/lastObjectEach'
import  objectMap from './object/objectMap'

// 数组相关的方法
import  map from './array/map'
import  some from './array/some'
import  every from './array/every'
import  includeArrays from './array/includeArrays'
import  arrayEach from './array/arrayEach'
import  lastArrayEach from './array/lastArrayEach'
import  uniq from './array/uniq'
import  union from './array/union'
import  toArray from './array/toArray'
import  sortBy from './array/sortBy'
import  shuffle from './array/shuffle'
import  sample from './array/sample'
import  slice from './array/slice'
import  filter from './array/filter'
import  findKey from './array/findKey'
import  includes from './array/includes'
import  find from './array/find'
import  reduce from './array/reduce'
import  copyWithin from './array/copyWithin'
import  chunk from './array/chunk'
import  zip from './array/zip'
import  unzip from './array/unzip'
import  zipObject from './array/zipObject'
import  flatten from './array/flatten'
import  pluck from './array/pluck'
import  invoke from './array/invoke'
import  invokeMap from './array/invokeMap'
import  toArrayTree from './array/toArrayTree'
import  toTreeArray from './array/toTreeArray'
import  findTree from './array/findTree'
import  eachTree from './array/eachTree'
import  mapTree from './array/mapTree'
import  filterTree from './array/filterTree'
import  searchTree from './array/searchTree'
import  arrayIndexOf from './array/arrayIndexOf'
import  arrayLastIndexOf from './array/arrayLastIndexOf'

// 基础方法
import  test from './base/test'
import  hasOwnProp from './base/hasOwnProp'
import  isArray from './base/isArray'
import  isNull from './base/isNull'
import  isNumberNaN from './base/isNaN'
import  isUndefined from './base/isUndefined'
import  isFunction from './base/isFunction'
import  isObject from './base/isObject'
import  isString from './base/isString'
import  isPlainObject from './base/isPlainObject'
import  isLeapYear from './base/isLeapYear'
import  isDate from './base/isDate'
import  eqNull from './base/eqNull'
import  each from './base/each'
import  forOf from './base/forOf'
import  lastForOf from './base/lastForOf'
import  indexOf from './base/indexOf'
import  lastIndexOf from './base/lastIndexOf'
import  keys from './base/keys'
import  values from './base/values'
import  clone from './base/clone'
import  getSize from './base/getSize'
import  lastEach from './base/lastEach'
import  remove from './base/remove'
import  clear from './base/clear'
import  isNumberFinite from './base/isFinite'
import  isFloat from './base/isFloat'
import  isInteger from './base/isInteger'
import  isBoolean from './base/isBoolean'
import  isNumber from './base/isNumber'
import  isRegExp from './base/isRegExp'
import  isError from './base/isError'
import  isTypeError from './base/isTypeError'
import  isEmpty from './base/isEmpty'
import  isSymbol from './base/isSymbol'
import  isArguments from './base/isArguments'
import  isElement from './base/isElement'
import  isDocument from './base/isDocument'
import  isWindow from './base/isWindow'
import  isFormData from './base/isFormData'
import  isMap from './base/isMap'
import  isWeakMap from './base/isWeakMap'
import  isSet from './base/isSet'
import  isWeakSet from './base/isWeakSet'
import  isMatch from './base/isMatch'
import  isEqual from './base/isEqual'
import  isEqualWith from './base/isEqualWith'
import  getType from './base/getType'
import  uniqueId from './base/uniqueId'
import  findIndexOf from './base/findIndexOf'
import  findLastIndexOf from './base/findLastIndexOf'
import  toStringJSON from './base/toStringJSON'
import  toJSONString from './base/toJSONString'
import  entries from './base/entries'
import  pick from './base/pick'
import  omit from './base/omit'
import  first from './base/first'
import  last from './base/last'
import  has from './base/has'
import  get from './base/get'
import  set from './base/set'
import  groupBy from './base/groupBy'
import  countBy from './base/countBy'
import  range from './base/range'
import  destructuring from './base/destructuring'

// 数值相关方法
import  random from './number/random'
import  max from './number/max'
import  min from './number/min'
import  commafy from './number/commafy'
import  toFixedString from './number/toFixedString'
import  toFixedNumber from './number/toFixedNumber'
import  toInteger from './number/toInteger'
import  toNumber from './number/toNumber'
import  add from './number/add'
import  subtract from './number/subtract'
import  multiply from './number/multiply'
import  divide from './number/divide'
import  sum from './number/sum'
import  mean from './number/mean'

// 日期相关的方法
import  getWhatYear from './date/getWhatYear'
import  getWhatMonth from './date/getWhatMonth'
import  getWhatDay from './date/getWhatDay'
import  toStringDate from './date/toStringDate'
import  toDateString from './date/toDateString'
import  now from './date/now'
import  timestamp from './date/timestamp'
import  isDateSame from './date/isDateSame'
import  getWhatWeek from './date/getWhatWeek'
import  getYearDay from './date/getYearDay'
import  getYearWeek from './date/getYearWeek'
import  getMonthWeek from './date/getMonthWeek'
import  getDayOfYear from './date/getDayOfYear'
import  getDayOfMonth from './date/getDayOfMonth'
import  getDateDiff from './date/getDateDiff'

// 字符串相关的方法
import  padEnd from './string/padEnd'
import  padStart from './string/padStart'
import  repeat from './string/repeat'
import  trim from './string/trim'
import  trimRight from './string/trimRight'
import  trimLeft from './string/trimLeft'
import  escape from './string/escape'
import  unescape from './string/unescape'
import  camelCase from './string/camelCase'
import  kebabCase from './string/kebabCase'
import  startsWith from './string/startsWith'
import  endsWith from './string/endsWith'
import  template from './string/template'
import  toValString from './string/toString'

// 函数相关的方法
import  property from './function/property'
import  bind from './function/bind'
import  once from './function/once'
import  after from './function/after'
import  before from './function/before'
import  throttle from './function/throttle'
import  debounce from './function/debounce'
import  delay from './function/delay'

// 地址相关的方法
import  unserialize from './url/unserialize'
import  serialize from './url/serialize'
import  parseUrl from './url/parseUrl'

// 浏览器相关的方法
import  getBaseURL from './browse/getBaseURL'
import  locat from './browse/locat'
import  cookie from './browse/cookie'
import  browse from './browse/browse'

assign(SupervueUtils, {
  // object
  assign: assign,
  extend: extend,
  objectEach: objectEach,
  lastObjectEach: lastObjectEach,
  objectMap: objectMap,

  // array
  uniq: uniq,
  union: union,
  sortBy: sortBy,
  shuffle: shuffle,
  sample: sample,
  some: some,
  every: every,
  slice: slice,
  filter: filter,
  find: find,
  findKey: findKey,
  includes: includes,
  arrayIndexOf: arrayIndexOf,
  arrayLastIndexOf: arrayLastIndexOf,
  map: map,
  reduce: reduce,
  copyWithin: copyWithin,
  chunk: chunk,
  zip: zip,
  unzip: unzip,
  zipObject: zipObject,
  flatten: flatten,
  toArray: toArray,
  includeArrays: includeArrays,
  pluck: pluck,
  invoke: invoke,
  invokeMap: invokeMap,
  arrayEach: arrayEach,
  lastArrayEach: lastArrayEach,
  toArrayTree: toArrayTree,
  toTreeArray: toTreeArray,
  findTree: findTree,
  eachTree: eachTree,
  mapTree: mapTree,
  filterTree: filterTree,
  searchTree: searchTree,

  // base
  test: test,
  hasOwnProp: hasOwnProp,
  eqNull: eqNull,
  isNaN: isNumberNaN,
  isFinite: isNumberFinite,
  isUndefined: isUndefined,
  isArray: isArray,
  isFloat: isFloat,
  isInteger: isInteger,
  isFunction: isFunction,
  isBoolean: isBoolean,
  isString: isString,
  isNumber: isNumber,
  isRegExp: isRegExp,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isDate: isDate,
  isError: isError,
  isTypeError: isTypeError,
  isEmpty: isEmpty,
  isNull: isNull,
  isSymbol: isSymbol,
  isArguments: isArguments,
  isElement: isElement,
  isDocument: isDocument,
  isWindow: isWindow,
  isFormData: isFormData,
  isMap: isMap,
  isWeakMap: isWeakMap,
  isSet: isSet,
  isWeakSet: isWeakSet,
  isLeapYear: isLeapYear,
  isMatch: isMatch,
  isEqual: isEqual,
  isEqualWith: isEqualWith,
  getType: getType,
  uniqueId: uniqueId,
  getSize: getSize,
  indexOf: indexOf,
  lastIndexOf: lastIndexOf,
  findIndexOf: findIndexOf,
  findLastIndexOf: findLastIndexOf,
  toStringJSON: toStringJSON,
  toJSONString: toJSONString,
  keys: keys,
  values: values,
  entries: entries,
  pick: pick,
  omit: omit,
  first: first,
  last: last,
  each: each,
  forOf: forOf,
  lastForOf: lastForOf,
  lastEach: lastEach,
  has: has,
  get: get,
  set: set,
  groupBy: groupBy,
  countBy: countBy,
  clone: clone,
  clear: clear,
  remove: remove,
  range: range,
  destructuring: destructuring,

  // number
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
  sum: sum,
  mean: mean,

  // date
  now: now,
  timestamp: timestamp,
  isDateSame: isDateSame,
  toStringDate: toStringDate,
  toDateString: toDateString,
  getWhatYear: getWhatYear,
  getWhatMonth: getWhatMonth,
  getWhatWeek: getWhatWeek,
  getWhatDay: getWhatDay,
  getYearDay: getYearDay,
  getYearWeek: getYearWeek,
  getMonthWeek: getMonthWeek,
  getDayOfYear: getDayOfYear,
  getDayOfMonth: getDayOfMonth,
  getDateDiff: getDateDiff,

  // string
  trim: trim,
  trimLeft: trimLeft,
  trimRight: trimRight,
  escape: escape,
  unescape: unescape,
  camelCase: camelCase,
  kebabCase: kebabCase,
  repeat: repeat,
  padStart: padStart,
  padEnd: padEnd,
  startsWith: startsWith,
  endsWith: endsWith,
  template: template,
  toString: toValString,

  // function
  property: property,
  bind: bind,
  once: once,
  after: after,
  before: before,
  throttle: throttle,
  debounce: debounce,
  delay: delay,

  // url
  unserialize: unserialize,
  serialize: serialize,
  parseUrl: parseUrl,

  // browse
  getBaseURL: getBaseURL,
  locat: locat,
  browse: browse,
  cookie: cookie
})

export default SupervueUtils
