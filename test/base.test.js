const SupervueUtils = require('../index')

describe('Base functions', () => {
  test('hasOwnProp()', () => {
    expect(
      SupervueUtils.hasOwnProp()
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp(0)
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp(1)
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp(null)
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp('')
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp([])
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp(true)
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp(false)
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp({})
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp({ a: 1 }, 'b')
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp({ aa: null }, 'aa.bb')
    ).toEqual(false)
    expect(
      SupervueUtils.hasOwnProp({ a: 1 }, 'a')
    ).toEqual(true)
    expect(
      SupervueUtils.hasOwnProp([1, 2, 3], 2)
    ).toEqual(true)
    expect(
      SupervueUtils.hasOwnProp([1, 2, 3], '2')
    ).toEqual(true)
    expect(
      SupervueUtils.hasOwnProp({ aa: { bb: 1 } }, 'aa.bb')
    ).toEqual(false)
  })

  test('isNaN()', () => {
    expect(
      SupervueUtils.isNaN()
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN(1)
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN('')
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN([])
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN(true)
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN(false)
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN({})
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN('null')
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN('NAN')
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN(/\d/)
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isNaN(NaN)
    ).toEqual(true)
  })

  test('isFinite()', () => {
    expect(
      SupervueUtils.isFinite()
    ).toEqual(false)
    expect(
      SupervueUtils.isFinite(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isFinite(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isFinite(NaN)
    ).toEqual(false)
    expect(
      SupervueUtils.isFinite({})
    ).toEqual(false)
    expect(
      SupervueUtils.isFinite([])
    ).toEqual(false)
    expect(
      SupervueUtils.isFinite(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isFinite(/\d/)
    ).toEqual(false)
    expect(
      SupervueUtils.isFinite('num')
    ).toEqual(false)
    expect(
      SupervueUtils.isFinite('5')
    ).toEqual(false)
    expect(
      SupervueUtils.isFinite('')
    ).toEqual(false)
    expect(
      SupervueUtils.isFinite(-2)
    ).toEqual(true)
    expect(
      SupervueUtils.isFinite(0)
    ).toEqual(true)
    expect(
      SupervueUtils.isFinite(5)
    ).toEqual(true)
    expect(
      SupervueUtils.isFinite(2e64)
    ).toEqual(true)
  })

  test('isUndefined()', () => {
    expect(
      SupervueUtils.isUndefined(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isUndefined(-2)
    ).toEqual(false)
    expect(
      SupervueUtils.isUndefined(false)
    ).toEqual(false)
    expect(
      SupervueUtils.isUndefined('')
    ).toEqual(false)
    expect(
      SupervueUtils.isUndefined({})
    ).toEqual(false)
    expect(
      SupervueUtils.isUndefined([])
    ).toEqual(false)
    expect(
      SupervueUtils.isUndefined(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isUndefined(/\d/)
    ).toEqual(false)
    expect(
      SupervueUtils.isUndefined(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isUndefined('null')
    ).toEqual(false)
    expect(
      SupervueUtils.isUndefined('undefined')
    ).toEqual(false)
    expect(
      SupervueUtils.isUndefined(undefined)
    ).toEqual(true)
    expect(
      SupervueUtils.isUndefined()
    ).toEqual(true)
  })

  test('isArray()', () => {
    let method = function () {
      expect(
        SupervueUtils.isArray(arguments)
      ).toEqual(false)
    }
    method()
    method(11, 22)
    expect(
      SupervueUtils.isArray(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isArray(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isArray({})
    ).toEqual(false)
    expect(
      SupervueUtils.isArray(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isArray(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isArray(-2)
    ).toEqual(false)
    expect(
      SupervueUtils.isArray(false)
    ).toEqual(false)
    expect(
      SupervueUtils.isArray('false')
    ).toEqual(false)
    expect(
      SupervueUtils.isArray([])
    ).toEqual(true)
    expect(
      SupervueUtils.isArray([1, 2, 3])
    ).toEqual(true)
  })

  test('isFloat()', () => {
    expect(
      SupervueUtils.isFloat(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isFloat('null')
    ).toEqual(false)
    expect(
      SupervueUtils.isFloat({})
    ).toEqual(false)
    expect(
      SupervueUtils.isFloat([])
    ).toEqual(false)
    expect(
      SupervueUtils.isFloat(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isFloat(/1\.3/)
    ).toEqual(false)
    expect(
      SupervueUtils.isFloat(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isFloat(3)
    ).toEqual(false)
    expect(
      SupervueUtils.isFloat(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isFloat('0')
    ).toEqual(false)
    expect(
      SupervueUtils.isFloat('3.9a')
    ).toEqual(false)
    expect(
      SupervueUtils.isFloat('1.3')
    ).toEqual(true)
    expect(
      SupervueUtils.isFloat(3.3)
    ).toEqual(true)
    expect(
      SupervueUtils.isFloat(-2.3)
    ).toEqual(true)
  })

  test('isInteger()', () => {
    expect(
      SupervueUtils.isInteger(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isInteger([])
    ).toEqual(false)
    expect(
      SupervueUtils.isInteger({})
    ).toEqual(false)
    expect(
      SupervueUtils.isInteger(/123/)
    ).toEqual(false)
    expect(
      SupervueUtils.isInteger(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isInteger(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isInteger('null')
    ).toEqual(false)
    expect(
      SupervueUtils.isInteger('undefined')
    ).toEqual(false)
    expect(
      SupervueUtils.isInteger(3.3)
    ).toEqual(false)
    expect(
      SupervueUtils.isInteger(-1.3)
    ).toEqual(false)
    expect(
      SupervueUtils.isInteger('3.4')
    ).toEqual(false)
    expect(
      SupervueUtils.isInteger('0')
    ).toEqual(true)
    expect(
      SupervueUtils.isInteger('3')
    ).toEqual(true)
    expect(
      SupervueUtils.isInteger('-5')
    ).toEqual(true)
    expect(
      SupervueUtils.isInteger(2)
    ).toEqual(true)
    expect(
      SupervueUtils.isInteger(-1)
    ).toEqual(true)
    expect(
      SupervueUtils.isInteger(0)
    ).toEqual(true)
  })

  test('isFunction()', () => {
    expect(
      SupervueUtils.isFunction('null')
    ).toEqual(false)
    expect(
      SupervueUtils.isFunction(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isFunction(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isFunction(false)
    ).toEqual(false)
    expect(
      SupervueUtils.isFunction(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isFunction(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isFunction([])
    ).toEqual(false)
    expect(
      SupervueUtils.isFunction({})
    ).toEqual(false)
    expect(
      SupervueUtils.isFunction(function () {})
    ).toEqual(true)
  })

  test('isBoolean()', () => {
    expect(
      SupervueUtils.isBoolean([])
    ).toEqual(false)
    expect(
      SupervueUtils.isBoolean({})
    ).toEqual(false)
    expect(
      SupervueUtils.isBoolean(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isBoolean(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isBoolean('false')
    ).toEqual(false)
    expect(
      SupervueUtils.isBoolean(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isBoolean(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isBoolean(true)
    ).toEqual(true)
  })

  test('isString()', () => {
    expect(
      SupervueUtils.isString(1)
    ).toEqual(false)
    expect(
      SupervueUtils.isString(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isString(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isString(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isString({})
    ).toEqual(false)
    expect(
      SupervueUtils.isString([])
    ).toEqual(false)
    expect(
      SupervueUtils.isString(/\d/)
    ).toEqual(false)
    expect(
      SupervueUtils.isString(function () {})
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        SupervueUtils.isString(Symbol('abc'))
      ).toEqual(false)
    }
    expect(
      SupervueUtils.isString(true)
    ).toEqual(false)
    expect(
      SupervueUtils.isString('')
    ).toEqual(true)
    expect(
      SupervueUtils.isString('abc')
    ).toEqual(true)
  })

  test('isNumber()', () => {
    expect(
      SupervueUtils.isNumber(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isNumber(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isNumber({})
    ).toEqual(false)
    expect(
      SupervueUtils.isNumber([])
    ).toEqual(false)
    expect(
      SupervueUtils.isNumber(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isNumber(/123/)
    ).toEqual(false)
    expect(
      SupervueUtils.isNumber('1')
    ).toEqual(false)
    expect(
      SupervueUtils.isNumber(-1)
    ).toEqual(true)
    expect(
      SupervueUtils.isNumber(0)
    ).toEqual(true)
    expect(
      SupervueUtils.isNumber(9.3)
    ).toEqual(true)
  })

  test('isRegExp()', () => {
    expect(
      SupervueUtils.isRegExp(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isRegExp(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isRegExp([])
    ).toEqual(false)
    expect(
      SupervueUtils.isRegExp({})
    ).toEqual(false)
    expect(
      SupervueUtils.isRegExp(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isRegExp(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isRegExp('a')
    ).toEqual(false)
    expect(
      SupervueUtils.isRegExp(new RegExp('a'))
    ).toEqual(true)
    expect(
      SupervueUtils.isRegExp(/\d/)
    ).toEqual(true)
  })

  test('isObject()', () => {
    expect(
      SupervueUtils.isObject(123)
    ).toEqual(false)
    expect(
      SupervueUtils.isObject(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isObject('null')
    ).toEqual(false)
    expect(
      SupervueUtils.isObject(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isObject(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isObject(false)
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        SupervueUtils.isObject(Symbol('123'))
      ).toEqual(false)
    }
    expect(
      SupervueUtils.isObject(/\d/)
    ).toEqual(true)
    expect(
      SupervueUtils.isObject(null)
    ).toEqual(true)
    expect(
      SupervueUtils.isObject([])
    ).toEqual(true)
    expect(
      SupervueUtils.isObject({})
    ).toEqual(true)
  })

  test('isPlainObject()', () => {
    expect(
      SupervueUtils.isPlainObject()
    ).toEqual(false)
    expect(
      SupervueUtils.isPlainObject(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isPlainObject(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isPlainObject(/\d/)
    ).toEqual(false)
    expect(
      SupervueUtils.isPlainObject(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isPlainObject([])
    ).toEqual(false)
    expect(
      SupervueUtils.isPlainObject('')
    ).toEqual(false)
    expect(
      SupervueUtils.isPlainObject(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isPlainObject(123)
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        SupervueUtils.isPlainObject(Symbol('123'))
      ).toEqual(false)
    }
    expect(
      SupervueUtils.isPlainObject({})
    ).toEqual(true)
  })

  test('isDate()', () => {
    expect(
      SupervueUtils.isDate()
    ).toEqual(false)
    expect(
      SupervueUtils.isDate('')
    ).toEqual(false)
    expect(
      SupervueUtils.isDate('2017-12-20')
    ).toEqual(false)
    expect(
      SupervueUtils.isDate('ue Dec 04 2018 15:02:06 GMT+0800')
    ).toEqual(false)
    expect(
      SupervueUtils.isDate(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isDate(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isDate(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isDate(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isDate([])
    ).toEqual(false)
    expect(
      SupervueUtils.isDate({})
    ).toEqual(false)
    expect(
      SupervueUtils.isDate(1514096716800)
    ).toEqual(false)
    expect(
      SupervueUtils.isDate(new Date())
    ).toEqual(true)
    expect(
      SupervueUtils.isDate(SupervueUtils.toStringDate('2017-12-20', 'yyyy-MM-dd'))
    ).toEqual(true)
  })

  test('isError()', () => {
    expect(
      SupervueUtils.isError()
    ).toEqual(false)
    expect(
      SupervueUtils.isError(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isError(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isError({})
    ).toEqual(false)
    expect(
      SupervueUtils.isError([])
    ).toEqual(false)
    expect(
      SupervueUtils.isError(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isError(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isError('')
    ).toEqual(false)
    expect(
      SupervueUtils.isError(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isError(new TypeError('error'))
    ).toEqual(true)
    expect(
      SupervueUtils.isError(new Error('error'))
    ).toEqual(true)
  })

  test('isTypeError()', () => {
    expect(
      SupervueUtils.isTypeError()
    ).toEqual(false)
    expect(
      SupervueUtils.isTypeError(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isTypeError(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isTypeError([])
    ).toEqual(false)
    expect(
      SupervueUtils.isTypeError({})
    ).toEqual(false)
    expect(
      SupervueUtils.isTypeError(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isTypeError(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isTypeError('')
    ).toEqual(false)
    expect(
      SupervueUtils.isTypeError(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isTypeError(new Error('error'))
    ).toEqual(false)
    expect(
      SupervueUtils.isTypeError(new TypeError('error'))
    ).toEqual(true)
  })

  test('isEmpty()', () => {
    expect(
      SupervueUtils.isEmpty([11])
    ).toEqual(false)
    expect(
      SupervueUtils.isEmpty({ a: 1 })
    ).toEqual(false)
    expect(
      SupervueUtils.isEmpty(' ')
    ).toEqual(false)
    expect(
      SupervueUtils.isEmpty()
    ).toEqual(true)
    expect(
      SupervueUtils.isEmpty(0)
    ).toEqual(true)
    expect(
      SupervueUtils.isEmpty(100)
    ).toEqual(true)
    expect(
      SupervueUtils.isEmpty(-1)
    ).toEqual(true)
    expect(
      SupervueUtils.isEmpty('')
    ).toEqual(true)
    expect(
      SupervueUtils.isEmpty(false)
    ).toEqual(true)
    expect(
      SupervueUtils.isEmpty(null)
    ).toEqual(true)
    expect(
      SupervueUtils.isEmpty(undefined)
    ).toEqual(true)
    expect(
      SupervueUtils.isEmpty({})
    ).toEqual(true)
    expect(
      SupervueUtils.isEmpty([])
    ).toEqual(true)
    expect(
      SupervueUtils.isEmpty(/\d/)
    ).toEqual(true)
    expect(
      SupervueUtils.isEmpty(function () {})
    ).toEqual(true)
  })

  test('isNull()', () => {
    expect(
      SupervueUtils.isNull()
    ).toEqual(false)
    expect(
      SupervueUtils.isNull(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isNull(false)
    ).toEqual(false)
    expect(
      SupervueUtils.isNull(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isNull(/null/)
    ).toEqual(false)
    expect(
      SupervueUtils.isNull({})
    ).toEqual(false)
    expect(
      SupervueUtils.isNull([])
    ).toEqual(false)
    expect(
      SupervueUtils.isNull(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isNull('null')
    ).toEqual(false)
    expect(
      SupervueUtils.isNull('')
    ).toEqual(false)
    expect(
      SupervueUtils.isNull(null)
    ).toEqual(true)
  })

  test('isSymbol()', () => {
    expect(
      SupervueUtils.isSymbol()
    ).toEqual(false)
    expect(
      SupervueUtils.isSymbol(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isSymbol(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isSymbol({})
    ).toEqual(false)
    expect(
      SupervueUtils.isSymbol([])
    ).toEqual(false)
    expect(
      SupervueUtils.isSymbol(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isSymbol(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isSymbol(false)
    ).toEqual(false)
    expect(
      SupervueUtils.isSymbol(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isSymbol('a')
    ).toEqual(false)
    if (typeof Symbol !== 'undefined') {
      expect(
        SupervueUtils.isSymbol(Symbol('a'))
      ).toEqual(true)
    }
  })

  test('isArguments()', () => {
    expect(
      SupervueUtils.isArguments()
    ).toEqual(false)
    expect(
      SupervueUtils.isArguments(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isArguments(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isArguments()
    ).toEqual(false)
    expect(
      SupervueUtils.isArguments([])
    ).toEqual(false)
    expect(
      SupervueUtils.isArguments({})
    ).toEqual(false)
    expect(
      SupervueUtils.isArguments(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isArguments(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isArguments(false)
    ).toEqual(false)
    expect(
      SupervueUtils.isArguments(function () {})
    ).toEqual(false)
    let method = function () {
      expect(
        SupervueUtils.isArguments(arguments)
      ).toEqual(true)
    }
    method()
  })

  test('isElement()', () => {
    expect(
      SupervueUtils.isElement()
    ).toEqual(false)
    expect(
      SupervueUtils.isElement(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isElement(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isElement(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isElement(123)
    ).toEqual(false)
    expect(
      SupervueUtils.isElement(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isElement('')
    ).toEqual(false)
    expect(
      SupervueUtils.isElement({})
    ).toEqual(false)
    expect(
      SupervueUtils.isElement([])
    ).toEqual(false)
    expect(
      SupervueUtils.isElement(function () {})
    ).toEqual(false)
  })

  test('isDocument()', () => {
    expect(
      SupervueUtils.isDocument()
    ).toEqual(false)
    expect(
      SupervueUtils.isDocument(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isDocument(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isDocument(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isDocument(123)
    ).toEqual(false)
    expect(
      SupervueUtils.isDocument(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isDocument('')
    ).toEqual(false)
    expect(
      SupervueUtils.isDocument({})
    ).toEqual(false)
    expect(
      SupervueUtils.isDocument([])
    ).toEqual(false)
    expect(
      SupervueUtils.isDocument(function () {})
    ).toEqual(false)
  })

  test('isWindow()', () => {
    expect(
      SupervueUtils.isWindow()
    ).toEqual(false)
    expect(
      SupervueUtils.isWindow(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isWindow(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isWindow(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isWindow(123)
    ).toEqual(false)
    expect(
      SupervueUtils.isWindow(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isWindow('')
    ).toEqual(false)
    expect(
      SupervueUtils.isWindow({})
    ).toEqual(false)
    expect(
      SupervueUtils.isWindow([])
    ).toEqual(false)
    expect(
      SupervueUtils.isWindow(function () {})
    ).toEqual(false)
  })

  test('isFormData()', () => {
    expect(
      SupervueUtils.isFormData()
    ).toEqual(false)
    expect(
      SupervueUtils.isFormData(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isFormData(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isFormData(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isFormData(123)
    ).toEqual(false)
    expect(
      SupervueUtils.isFormData(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isFormData('')
    ).toEqual(false)
    expect(
      SupervueUtils.isFormData({})
    ).toEqual(false)
    expect(
      SupervueUtils.isFormData([])
    ).toEqual(false)
    expect(
      SupervueUtils.isFormData('a=1')
    ).toEqual(false)
    expect(
      SupervueUtils.isFormData(new FormData())
    ).toEqual(true)
  })

  test('isMap()', () => {
    expect(
      SupervueUtils.isMap()
    ).toEqual(false)
    expect(
      SupervueUtils.isMap(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isMap(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isMap(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isMap(123)
    ).toEqual(false)
    expect(
      SupervueUtils.isMap(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isMap('')
    ).toEqual(false)
    expect(
      SupervueUtils.isMap({})
    ).toEqual(false)
    expect(
      SupervueUtils.isMap([])
    ).toEqual(false)
    expect(
      SupervueUtils.isMap(new Map())
    ).toEqual(true)
  })

  test('isWeakMap()', () => {
    expect(
      SupervueUtils.isWeakMap()
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakMap(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakMap(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakMap(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakMap(123)
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakMap(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakMap('')
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakMap({})
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakMap([])
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakMap(new WeakMap())
    ).toEqual(true)
  })

  test('isSet()', () => {
    expect(
      SupervueUtils.isSet()
    ).toEqual(false)
    expect(
      SupervueUtils.isSet(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isSet(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isSet(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isSet(123)
    ).toEqual(false)
    expect(
      SupervueUtils.isSet(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isSet('')
    ).toEqual(false)
    expect(
      SupervueUtils.isSet({})
    ).toEqual(false)
    expect(
      SupervueUtils.isSet([])
    ).toEqual(false)
    expect(
      SupervueUtils.isSet(new Set())
    ).toEqual(true)
  })

  test('isWeakSet()', () => {
    expect(
      SupervueUtils.isWeakSet()
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakSet(null)
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakSet(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakSet(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakSet(123)
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakSet(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakSet('')
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakSet({})
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakSet([])
    ).toEqual(false)
    expect(
      SupervueUtils.isWeakSet(new WeakSet())
    ).toEqual(true)
  })

  test('isLeapYear()', () => {
    expect(
      SupervueUtils.isLeapYear('2018-12-01')
    ).toEqual(false)
    expect(
      SupervueUtils.isLeapYear('2020-12-01 10:30:30')
    ).toEqual(true)
    expect(
      SupervueUtils.isLeapYear(1581305634689)
    ).toEqual(true)
    expect(
      SupervueUtils.isLeapYear(new Date(2012, 1, 1).getTime())
    ).toEqual(true)
    expect(
      SupervueUtils.isLeapYear(new Date(2020, 11, 1))
    ).toEqual(true)
  })

  test('isMatch()', () => {
    expect(
      SupervueUtils.isMatch()
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch(null)
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch(undefined)
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch([])
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch({})
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch(-1)
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch(0)
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch('')
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch('sbc')
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch([], [])
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch({}, {})
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch({ a: 22 })
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch([11, 22], [11])
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch([22, 11], [11])
    ).toEqual(false)
    expect(
      SupervueUtils.isMatch([11], [33])
    ).toEqual(false)
    expect(
      SupervueUtils.isMatch([{ a: { bb: 33 } }], [{ a: { bb: 33 } }])
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch({ aa: 11, bb: 22 }, { bb: 22 })
    ).toEqual(true)
    expect(
      SupervueUtils.isMatch({ aa: 11, bb: [1, 2, 3] }, { bb: [1, 2, 3] })
    ).toEqual(true)
  })

  test('isEqual()', () => {
    expect(
      SupervueUtils.isEqual(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual(false)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual(0, false)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual(undefined, false)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual(undefined, null)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual(null, false)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual(0, undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual(undefined, 0)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual(false, 0)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual(/0/, 0)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual(true, 1)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual(false, true)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual({}, function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual({}, [])
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual({ 0: 1 }, [1])
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual([undefined], [null])
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual([11, 22], [22, 11])
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual({ name: 'test1', list: [11, 33, { a: /\D/ }] }, { name: 'test1', list: [11, 33, { a: /\d/ }] })
    ).toEqual(false)
    expect(
      SupervueUtils.isEqual([11, 22, 33], [11, 22, 33])
    ).toEqual(true)
    expect(
      SupervueUtils.isEqual([11, '22', /\d/, false], [11, '22', new RegExp('\\d'), false])
    ).toEqual(true)
    expect(
      SupervueUtils.isEqual({ name: 'test1' }, { name: 'test1' })
    ).toEqual(true)
    expect(
      SupervueUtils.isEqual({ name: 'test1', list: [11, /\d/] }, { name: 'test1', list: [11, /\d/] })
    ).toEqual(true)
    expect(
      SupervueUtils.isEqual([{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }], [{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }])
    ).toEqual(true)
  })

  test('isEqualWith()', () => {
    expect(
      SupervueUtils.isEqualWith(0)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith(false)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith(0, false)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith(undefined, false)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith(undefined, null)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith(null, false)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith(0, undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith(undefined, 0)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith(false, 0)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith(/0/, 0)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith(true, 1)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith(false, true)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith({}, function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith({}, [])
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith({ 0: 1 }, [1])
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith([undefined], [null])
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith([11, 22], [22, 11])
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith([11, 22], [22, 11], (v1, v2) => true)
    ).toEqual(true)
    expect(
      SupervueUtils.isEqualWith({ name: 'test1', list: [11, 33, { a: /\D/ }] }, { name: 'test1', list: [11, 33, { a: /\d/ }] })
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith([11, 22, 33], [11, 22, 33])
    ).toEqual(true)
    expect(
      SupervueUtils.isEqualWith([11, 22, 33], [11, 22, 33], (v1, v2) => false)
    ).toEqual(false)
    expect(
      SupervueUtils.isEqualWith([11, '22', /\d/, false], [11, '22', new RegExp('\\d'), false])
    ).toEqual(true)
    expect(
      SupervueUtils.isEqualWith({ name: 'test1' }, { name: 'test1' })
    ).toEqual(true)
    expect(
      SupervueUtils.isEqualWith({ name: 'test1', list: [11, /\d/] }, { name: 'test1', list: [11, /\d/] })
    ).toEqual(true)
    expect(
      SupervueUtils.isEqualWith([{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }], [{ a: 1, b: [{ aa: false }, { bb: new Date(2018, 1, 1) }] }, { c: /\D/, d: null }])
    ).toEqual(true)
  })

  test('property()', () => {
    let getName = SupervueUtils.property('name')
    expect(
      getName({ name: 'test11', age: 25, height: 176 })
    ).toEqual('test11')
    expect(
      getName({ age: 25, height: 176 })
    ).toEqual(undefined)
  })

  test('getType()', () => {
    expect(
      SupervueUtils.getType()
    ).toEqual('undefined')
    expect(
      SupervueUtils.getType(undefined)
    ).toEqual('undefined')
    expect(
      SupervueUtils.getType(null)
    ).toEqual('null')
    expect(
      SupervueUtils.getType('')
    ).toEqual('string')
    expect(
      SupervueUtils.getType('1')
    ).toEqual('string')
    expect(
      SupervueUtils.getType(1)
    ).toEqual('number')
    expect(
      SupervueUtils.getType(1547895990810)
    ).toEqual('number')
    expect(
      SupervueUtils.getType(new Date())
    ).toEqual('date')
    expect(
      SupervueUtils.getType([])
    ).toEqual('array')
    expect(
      SupervueUtils.getType([{}])
    ).toEqual('array')
    expect(
      SupervueUtils.getType(/\d/)
    ).toEqual('regexp')
    expect(
      SupervueUtils.getType(new RegExp('-'))
    ).toEqual('regexp')
    expect(
      SupervueUtils.getType({})
    ).toEqual('object')
    expect(
      SupervueUtils.getType(false)
    ).toEqual('boolean')
    expect(
      SupervueUtils.getType(true)
    ).toEqual('boolean')
    expect(
      SupervueUtils.getType(new Error())
    ).toEqual('error')
    expect(
      SupervueUtils.getType(new TypeError())
    ).toEqual('error')
    expect(
      SupervueUtils.getType(function () {})
    ).toEqual('function')
    let method = function () {
      expect(
        SupervueUtils.getType(arguments)
      ).toEqual('object')
    }
    method(11, 22)
    if (typeof Symbol !== 'undefined') {
      expect(
        SupervueUtils.getType(Symbol('name'))
      ).toEqual('symbol')
    }
  })

  test('uniqueId()', () => {
    expect(
      SupervueUtils.uniqueId(undefined)
    ).toEqual('1')
    expect(
      SupervueUtils.uniqueId(null)
    ).toEqual('2')
    expect(
      SupervueUtils.uniqueId()
    ).toEqual('3')
    expect(
      SupervueUtils.uniqueId()
    ).toEqual('4')
    expect(
      SupervueUtils.uniqueId(0)
    ).toEqual('05')
    expect(
      SupervueUtils.uniqueId(-1)
    ).toEqual('-16')
    expect(
      SupervueUtils.uniqueId('prefix_')
    ).toEqual('prefix_7')
  })

  test('getSize()', () => {
    expect(
      SupervueUtils.getSize()
    ).toEqual(0)
    expect(
      SupervueUtils.getSize(null)
    ).toEqual(0)
    expect(
      SupervueUtils.getSize(undefined)
    ).toEqual(0)
    expect(
      SupervueUtils.getSize('')
    ).toEqual(0)
    expect(
      SupervueUtils.getSize(false)
    ).toEqual(0)
    expect(
      SupervueUtils.getSize(-1)
    ).toEqual(0)
    expect(
      SupervueUtils.getSize(10)
    ).toEqual(0)
    expect(
      SupervueUtils.getSize(function () {})
    ).toEqual(0)
    expect(
      SupervueUtils.getSize('123')
    ).toEqual(3)
    expect(
      SupervueUtils.getSize([1, 3])
    ).toEqual(2)
    expect(
      SupervueUtils.getSize([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }])
    ).toEqual(4)
    expect(
      SupervueUtils.getSize({ a: 2, b: 5 })
    ).toEqual(2)
  })

  test('indexOf()', () => {
    expect(
      SupervueUtils.indexOf()
    ).toEqual(-1)
    expect(
      SupervueUtils.indexOf(null)
    ).toEqual(-1)
    expect(
      SupervueUtils.indexOf(undefined)
    ).toEqual(-1)
    expect(
      SupervueUtils.indexOf([])
    ).toEqual(-1)
    expect(
      SupervueUtils.indexOf({})
    ).toEqual(-1)
    expect(
      SupervueUtils.indexOf(function () {})
    ).toEqual(-1)
    expect(
      SupervueUtils.indexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      SupervueUtils.indexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      SupervueUtils.indexOf({ a: 1, b: 3 })
    ).toEqual(-1)
    expect(
      SupervueUtils.indexOf({ a: 1, b: 3 }, 5)
    ).toEqual(-1)
    expect(
      SupervueUtils.indexOf({ a: 1, b: 3 }, 1)
    ).toEqual('a')
    expect(
      SupervueUtils.indexOf({ a: 1, b: 3 }, 3)
    ).toEqual('b')
    expect(
      SupervueUtils.indexOf([11, 22, 33, 22], 22)
    ).toEqual(1)
    expect(
      SupervueUtils.indexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('arrayIndexOf()', () => {
    expect(
      SupervueUtils.arrayIndexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      SupervueUtils.arrayIndexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      SupervueUtils.arrayIndexOf([11, 22, 33, 22], 22)
    ).toEqual(1)
    expect(
      SupervueUtils.arrayIndexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('lastIndexOf()', () => {
    expect(
      SupervueUtils.lastIndexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      SupervueUtils.lastIndexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      SupervueUtils.lastIndexOf({ a: 1, b: 3 })
    ).toEqual(-1)
    expect(
      SupervueUtils.lastIndexOf({ a: 1, b: 3 }, 5)
    ).toEqual(-1)
    expect(
      SupervueUtils.lastIndexOf({ a: 1, b: 3 }, 1)
    ).toEqual('a')
    expect(
      SupervueUtils.lastIndexOf({ a: 1, b: 3 }, 3)
    ).toEqual('b')
    expect(
      SupervueUtils.lastIndexOf([11, 22, 33, 22], 22)
    ).toEqual(3)
    expect(
      SupervueUtils.lastIndexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('arrayLastIndexOf()', () => {
    expect(
      SupervueUtils.arrayLastIndexOf([11, 22, 33, 22])
    ).toEqual(-1)
    expect(
      SupervueUtils.arrayLastIndexOf([11, 22, 33, 22], 55)
    ).toEqual(-1)
    expect(
      SupervueUtils.arrayLastIndexOf([11, 22, 33, 22], 22)
    ).toEqual(3)
    expect(
      SupervueUtils.arrayLastIndexOf([11, 22, 33, 22], 33)
    ).toEqual(2)
  })

  test('findIndexOf()', () => {
    expect(
      SupervueUtils.findIndexOf([11, 22, 33, 22], item => item === 55)
    ).toEqual(-1)
    expect(
      SupervueUtils.findIndexOf({ a: 11, b: 22, c: 33 }, item => item === 55)
    ).toEqual(-1)
    expect(
      SupervueUtils.findIndexOf({ a: 11, b: 22, c: 33 }, item => item === 22)
    ).toEqual('b')
    expect(
      SupervueUtils.findIndexOf([11, 22, 33, 22], item => item === 22)
    ).toEqual(1)
  })

  test('findLastIndexOf()', () => {
    expect(
      SupervueUtils.findLastIndexOf([11, 22, 33, 22], item => item === 55)
    ).toEqual(-1)
    expect(
      SupervueUtils.findLastIndexOf({ a: 11, b: 22, c: 33 }, item => item === 55)
    ).toEqual(-1)
    expect(
      SupervueUtils.findLastIndexOf({ a: 11, b: 22, c: 33 }, item => item === 22)
    ).toEqual('b')
    expect(
      SupervueUtils.findLastIndexOf([11, 22, 33, 22], item => item === 22)
    ).toEqual(3)
  })

  test('includes()', () => {
    expect(
      SupervueUtils.includes([11])
    ).toEqual(false)
    expect(
      SupervueUtils.includes({})
    ).toEqual(false)
    expect(
      SupervueUtils.includes([], 22)
    ).toEqual(false)
    expect(
      SupervueUtils.includes({}, 22)
    ).toEqual(false)
    expect(
      SupervueUtils.includes([11], 22)
    ).toEqual(false)
    expect(
      SupervueUtils.includes({ a: 11, b: 22 }, 22)
    ).toEqual(true)
    expect(
      SupervueUtils.includes([11, 22], 22)
    ).toEqual(true)
  })

  test('toStringJSON()', () => {
    expect(
      SupervueUtils.toStringJSON()
    ).toEqual({})
    expect(
      SupervueUtils.toStringJSON(0)
    ).toEqual({})
    expect(
      SupervueUtils.toStringJSON('')
    ).toEqual({})
    expect(
      SupervueUtils.toStringJSON('{"a":1}')
    ).toEqual({ a: 1 })
    expect(
      SupervueUtils.toStringJSON('[11,22]')
    ).toEqual([11, 22])
  })

  test('toJSONString()', () => {
    expect(
      SupervueUtils.toJSONString('')
    ).toEqual('""')
    expect(
      SupervueUtils.toJSONString(0)
    ).toEqual('0')
    expect(
      SupervueUtils.toJSONString([])
    ).toEqual('[]')
    expect(
      SupervueUtils.toJSONString({})
    ).toEqual('{}')
    expect(
      SupervueUtils.toJSONString({ a: 1 })
    ).toEqual('{"a":1}')
    expect(
      SupervueUtils.toJSONString([11, 22])
    ).toEqual('[11,22]')
  })

  test('keys()', () => {
    expect(
      SupervueUtils.keys()
    ).toEqual([])
    expect(
      SupervueUtils.keys('')
    ).toEqual([])
    expect(
      SupervueUtils.keys(false)
    ).toEqual([])
    expect(
      SupervueUtils.keys({})
    ).toEqual([])
    expect(
      SupervueUtils.keys(-1)
    ).toEqual([])
    expect(
      SupervueUtils.keys(123)
    ).toEqual([])
    expect(
      SupervueUtils.keys({ a: 11, b: 22 })
    ).toEqual(['a', 'b'])
    expect(
      SupervueUtils.keys([{ a: 11 }, { a: 22 }, { a: 33 }])
    ).toEqual(['0', '1', '2'])
    expect(
      SupervueUtils.keys([11, 22])
    ).toEqual(['0', '1'])
    expect(
      SupervueUtils.keys('123')
    ).toEqual(['0', '1', '2'])
  })

  test('values()', () => {
    expect(
      SupervueUtils.values()
    ).toEqual([])
    expect(
      SupervueUtils.values('')
    ).toEqual([])
    expect(
      SupervueUtils.values(false)
    ).toEqual([])
    expect(
      SupervueUtils.values({})
    ).toEqual([])
    expect(
      SupervueUtils.values(-1)
    ).toEqual([])
    expect(
      SupervueUtils.values(123)
    ).toEqual([])
    expect(
      SupervueUtils.values({ a: 11, b: 22 })
    ).toEqual([11, 22])
    expect(
      SupervueUtils.values([{ a: 11 }, { a: 22 }, { a: 33 }])
    ).toEqual([{ a: 11 }, { a: 22 }, { a: 33 }])
    expect(
      SupervueUtils.values([11, 22])
    ).toEqual([11, 22])
    expect(
      SupervueUtils.values('123')
    ).toEqual(['1', '2', '3'])
  })

  test('entries()', () => {
    expect(
      SupervueUtils.entries()
    ).toEqual([])
    expect(
      SupervueUtils.entries('')
    ).toEqual([])
    expect(
      SupervueUtils.entries(false)
    ).toEqual([])
    expect(
      SupervueUtils.entries({})
    ).toEqual([])
    expect(
      SupervueUtils.entries(-1)
    ).toEqual([])
    expect(
      SupervueUtils.entries(123)
    ).toEqual([])
    expect(
      SupervueUtils.entries({ a: 11, b: 22 })
    ).toEqual([['a', 11], ['b', 22]])
    expect(
      SupervueUtils.entries([11, 22])
    ).toEqual([['0', 11], ['1', 22]])
    expect(
      SupervueUtils.entries('123')
    ).toEqual([['0', '1'], ['1', '2'], ['2', '3']])
  })

  test('pick()', () => {
    expect(
      SupervueUtils.pick({ name: 'test11', age: 25, height: 176 }, 'name')
    ).toEqual({ name: 'test11' })
    expect(
      SupervueUtils.pick({ name: 'test11', age: 25, height: 176 }, ['age'])
    ).toEqual({ age: 25 })
    expect(
      SupervueUtils.pick({ name: 'test11', age: 25, height: 176 }, val => SupervueUtils.isNumber(val))
    ).toEqual({ age: 25, height: 176 })
  })

  test('omit()', () => {
    expect(
      SupervueUtils.omit({ name: 'test11', age: 25, height: 176 }, 'name', 'height')
    ).toEqual({ age: 25 })
    expect(
      SupervueUtils.omit({ name: 'test11', age: 25, height: 176 }, ['name', 'age'])
    ).toEqual({ height: 176 })
    expect(
      SupervueUtils.omit({ name: 'test11', age: 25, height: 176 }, val => SupervueUtils.isNumber(val))
    ).toEqual({ name: 'test11' })
  })

  test('first()', () => {
    expect(
      SupervueUtils.first()
    ).toEqual(undefined)
    expect(
      SupervueUtils.first(undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.first(null)
    ).toEqual(undefined)
    expect(
      SupervueUtils.first(123)
    ).toEqual(undefined)
    expect(
      SupervueUtils.first(true)
    ).toEqual(undefined)
    expect(
      SupervueUtils.first({})
    ).toEqual(undefined)
    expect(
      SupervueUtils.first([])
    ).toEqual(undefined)
    expect(
      SupervueUtils.first('123')
    ).toEqual('1')
    expect(
      SupervueUtils.first({ a: 11, b: 22 })
    ).toEqual(11)
    expect(
      SupervueUtils.first([11, 22])
    ).toEqual(11)
  })

  test('last()', () => {
    expect(
      SupervueUtils.last()
    ).toEqual(undefined)
    expect(
      SupervueUtils.last(undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.last(null)
    ).toEqual(undefined)
    expect(
      SupervueUtils.last(123)
    ).toEqual(undefined)
    expect(
      SupervueUtils.last(true)
    ).toEqual(undefined)
    expect(
      SupervueUtils.last({})
    ).toEqual(undefined)
    expect(
      SupervueUtils.last([])
    ).toEqual(undefined)
    expect(
      SupervueUtils.last('123')
    ).toEqual('3')
    expect(
      SupervueUtils.last({ a: 11, b: 22 })
    ).toEqual(22)
    expect(
      SupervueUtils.last([11, 22])
    ).toEqual(22)
  })

  test('each()', () => {
    let rest = []
    SupervueUtils.each([11, 22, 33], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[11, 0], [22, 1], [33, 2]])
    rest = []
    SupervueUtils.each({ a: 11, b: 22, c: 33 }, (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[11, 'a'], [22, 'b'], [33, 'c']])
    rest = []
    SupervueUtils.each('12345', (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([['1', '0'], ['2', '1'], ['3', '2'], ['4', '3'], ['5', '4']])
  })

  test('lastEach()', () => {
    let rest = []
    SupervueUtils.lastEach([11, 22, 33], (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[33, 2], [22, 1], [11, 0]])
    rest = []
    SupervueUtils.lastEach({ a: 11, b: 22, c: 33 }, (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([[33, 'c'], [22, 'b'], [11, 'a']])
    rest = []
    SupervueUtils.lastEach('12345', (item, key, obj) => {
      rest.push([item, key])
    })
    expect(
      rest
    ).toEqual([['5', '4'], ['4', '3'], ['3', '2'], ['2', '1'], ['1', '0']])
  })

  test('has()', () => {
    expect(
      SupervueUtils.has()
    ).toEqual(false)
    expect(
      SupervueUtils.has('123')
    ).toEqual(false)
    expect(
      SupervueUtils.has(null)
    ).toEqual(false)
    expect(
      SupervueUtils.has(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.has(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.has(0)
    ).toEqual(false)
    expect(
      SupervueUtils.has({})
    ).toEqual(false)
    expect(
      SupervueUtils.has([])
    ).toEqual(false)
    expect(
      SupervueUtils.has(/\d/)
    ).toEqual(false)
    expect(
      SupervueUtils.has(function () {})
    ).toEqual(false)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, 44] } })
    ).toEqual(false)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, null)
    ).toEqual(false)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, '')
    ).toEqual(false)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, [])
    ).toEqual(false)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[3]')
    ).toEqual(false)
    expect(
      SupervueUtils.has({ aa: undefined }, 'aa.bb.cc')
    ).toEqual(false)
    expect(
      SupervueUtils.has({ aa: null }, 'aa.bb.cc')
    ).toEqual(false)
    expect(
      SupervueUtils.has({ aa: { bb: null, cc: 11 } }, 'aa.bb.cc')
    ).toEqual(false)
    expect(
      SupervueUtils.has([0, 1, null, undefined, -1, /\d/], 6)
    ).toEqual(false)
    expect(
      SupervueUtils.has({ aa: { bb: null } }, 'aa.bb')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ aa: { bb: { cc: undefined } } }, 'aa.bb.cc')
    ).toEqual(true)
    expect(
      SupervueUtils.has('abc', '[2]')
    ).toEqual(true)
    expect(
      SupervueUtils.has('abc', [0])
    ).toEqual(true)
    expect(
      SupervueUtils.has([11, 22, 33], 1)
    ).toEqual(true)
    expect(
      SupervueUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], 1)
    ).toEqual(true)
    expect(
      SupervueUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1]')
    ).toEqual(true)
    expect(
      SupervueUtils.has([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1].b')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: { b: 0, c: 22, d: [33, 44] } }, 'a.b')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, 44] }, 'a.d': 333 }, 'a.d')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: { c: 22, d: [33, 44] }, 'a.b': 333 }, 'a.b')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [null] } }, 'a.d[0]')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, { f: 66 }] } }, 'a.d[1].f')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, 44, 55, undefined] } }, 'a.d[3]')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: { b: 11, c: undefined, d: [33, 44] } }, ['a', 'c'])
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: { b: 11, c: 22, d: [33, 44], e: 0 } }, ['a', 'e'])
    ).toEqual(true)
    expect(
      SupervueUtils.has([0, 1, null, undefined, -1, /\d/], 0)
    ).toEqual(true)
    expect(
      SupervueUtils.has([0, 1, null, undefined, -1, /\d/], 1)
    ).toEqual(true)
    expect(
      SupervueUtils.has([0, 1, null, undefined, -1, /\d/], 2)
    ).toEqual(true)
    expect(
      SupervueUtils.has([0, 1, null, undefined, -1, /\d/], '3')
    ).toEqual(true)
    expect(
      SupervueUtils.has([0, 1, null, undefined, -1, /\d/], '4')
    ).toEqual(true)
    expect(
      SupervueUtils.has([0, 1, null, undefined, -1, /\d/], '5')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'a')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b.c')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.f')
    ).toEqual(true)
    expect(
      SupervueUtils.has({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.e')
    ).toEqual(true)
  })

  test('get()', () => {
    expect(
      SupervueUtils.get()
    ).toEqual(undefined)
    expect(
      SupervueUtils.get('123')
    ).toEqual(undefined)
    expect(
      SupervueUtils.get(null)
    ).toEqual(undefined)
    expect(
      SupervueUtils.get(undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.get([])
    ).toEqual(undefined)
    expect(
      SupervueUtils.get({})
    ).toEqual(undefined)
    expect(
      SupervueUtils.get(-1)
    ).toEqual(undefined)
    expect(
      SupervueUtils.get(0)
    ).toEqual(undefined)
    expect(
      SupervueUtils.get(/\d/)
    ).toEqual(undefined)
    expect(
      SupervueUtils.get(function () {})
    ).toEqual(undefined)
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } })
    ).toEqual(undefined)
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, null)
    ).toEqual(undefined)
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, '')
    ).toEqual(undefined)
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, [])
    ).toEqual(undefined)
    expect(
      SupervueUtils.get('abc', '[2]')
    ).toEqual('c')
    expect(
      SupervueUtils.get('abc', [0])
    ).toEqual('a')
    expect(
      SupervueUtils.get([11, 22, 33], 1)
    ).toEqual(22)
    expect(
      SupervueUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], 1)
    ).toEqual({ a: 33, b: 44 })
    expect(
      SupervueUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1]')
    ).toEqual({ a: 33, b: 44 })
    expect(
      SupervueUtils.get([{ a: 11, b: 22 }, { a: 33, b: 44 }], '[1].b')
    ).toEqual(44)
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a')
    ).toEqual({ b: 11, c: 22, d: [33, 44] })
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.b')
    ).toEqual(11)
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] }, 'a.b': 333 }, 'a.b')
    ).toEqual(333)
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d')
    ).toEqual([33, 44])
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[0]')
    ).toEqual(33)
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, { f: 66 }] } }, 'a.d[1].f')
    ).toEqual(66)
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, 'a.d[3]', '111')
    ).toEqual('111')
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, ['a', 'c'], '222')
    ).toEqual(22)
    expect(
      SupervueUtils.get({ a: { b: 11, c: 22, d: [33, 44] } }, ['a', 'e'], '333')
    ).toEqual('333')
    expect(
      SupervueUtils.get([0, 1, null, undefined, -1, /\d/], 0)
    ).toEqual(0)
    expect(
      SupervueUtils.get([0, 1, null, undefined, -1, /\d/], 1)
    ).toEqual(1)
    expect(
      SupervueUtils.get([0, 1, null, undefined, -1, /\d/], 2)
    ).toEqual(null)
    expect(
      SupervueUtils.get([0, 1, null, undefined, -1, /\d/], '3')
    ).toEqual(undefined)
    expect(
      SupervueUtils.get([0, 1, null, undefined, -1, /\d/], '4')
    ).toEqual(-1)
    expect(
      SupervueUtils.get([0, 1, null, undefined, -1, /\d/], '5')
    ).toEqual(/\d/)
    expect(
      SupervueUtils.get({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'a')
    ).toEqual(1)
    expect(
      SupervueUtils.get({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b')
    ).toEqual({ c: null, d: 33, cc: { f: undefined, e: 0 } })
    expect(
      SupervueUtils.get({ a: 1, b: { c: null, d: 33, cc: { f: undefined, e: 0 } } }, 'b.c')
    ).toEqual(null)
    expect(
      SupervueUtils.get({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.f')
    ).toEqual(undefined)
    expect(
      SupervueUtils.get({ a: 1, b: { c: null, cc: { f: undefined, e: 0 } } }, 'b.cc.e')
    ).toEqual(0)
  })

  test('set()', () => {
    expect(
      SupervueUtils.set(null)
    ).toEqual(null)
    expect(
      SupervueUtils.set(undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.set('')
    ).toEqual('')
    expect(
      SupervueUtils.set(0)
    ).toEqual(0)
    expect(
      SupervueUtils.set(-1)
    ).toEqual(-1)
    expect(
      SupervueUtils.set({})
    ).toEqual({})
    expect(
      SupervueUtils.set([])
    ).toEqual([])
    expect(
      SupervueUtils.set({ a: 11 }, null)
    ).toEqual({ a: 11 })
    expect(
      SupervueUtils.set([11])
    ).toEqual([11], null)
    expect(
      SupervueUtils.set({}, 'a', 11)
    ).toEqual({ a: 11 })
    expect(
      SupervueUtils.sum(SupervueUtils.set({ b: 22 }, 'a', 11))
    ).toEqual(33)
    expect(
      SupervueUtils.set({}, 'a.b', 11)
    ).toEqual({ a: { b: 11 } })
    expect(
      SupervueUtils.set({}, 'a.d[0]', 33)
    ).toEqual({ a: { d: [33] } })
    expect(
      SupervueUtils.set({ a: {} }, 'a.d[0].f.h', 44)
    ).toEqual({ a: { d: [{ f: { h: 44 } }] } })
    expect(
      SupervueUtils.set({}, 'a.d[0].f.h[0]', 55)
    ).toEqual({ a: { d: [{ f: { h: [55] } }] } })
    expect(
      SupervueUtils.set({}, ['a'], 11)
    ).toEqual({ a: 11 })
    expect(
      SupervueUtils.sum(SupervueUtils.set({ c: 33 }, ['a'], 11))
    ).toEqual(44)
    expect(
      SupervueUtils.set({}, ['a', 'c'], 22)
    ).toEqual({ a: { c: 22 } })
    expect(
      SupervueUtils.set({}, ['a', 'd[0]', 'f', 'h'], 44)
    ).toEqual({ a: { d: [{ f: { h: 44 } }] } })
    expect(
      SupervueUtils.set({ a: {} }, ['a', 'd[0]', 'f', 'h[0]'], 55)
    ).toEqual({ a: { d: [{ f: { h: [55] } }] } })
  })

  test('groupBy()', () => {
    expect(
      SupervueUtils.groupBy()
    ).toEqual({})
    expect(
      SupervueUtils.groupBy(null)
    ).toEqual({})
    expect(
      SupervueUtils.groupBy(undefined)
    ).toEqual({})
    expect(
      SupervueUtils.groupBy({})
    ).toEqual({})
    expect(
      SupervueUtils.groupBy([])
    ).toEqual({})
    expect(
      SupervueUtils.groupBy(/\d/)
    ).toEqual({})
    expect(
      SupervueUtils.groupBy(0)
    ).toEqual({})
    expect(
      SupervueUtils.groupBy(-1)
    ).toEqual({})
    expect(
      SupervueUtils.groupBy(0, -1)
    ).toEqual({})
    expect(
      SupervueUtils.groupBy(-1, 'type')
    ).toEqual({})
    expect(
      SupervueUtils.groupBy([{ type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: [{ type: 'a' }], b: [{ type: 'b' }] })
    expect(
      SupervueUtils.groupBy([{ type: 'a' }, { type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: [{ type: 'a' }, { type: 'a' }], b: [{ type: 'b' }] })
  })

  test('countBy()', () => {
    expect(
      SupervueUtils.countBy()
    ).toEqual({})
    expect(
      SupervueUtils.countBy(null)
    ).toEqual({})
    expect(
      SupervueUtils.countBy(undefined)
    ).toEqual({})
    expect(
      SupervueUtils.countBy({})
    ).toEqual({})
    expect(
      SupervueUtils.countBy([])
    ).toEqual({})
    expect(
      SupervueUtils.countBy(/\d/)
    ).toEqual({})
    expect(
      SupervueUtils.countBy(0)
    ).toEqual({})
    expect(
      SupervueUtils.countBy(-1)
    ).toEqual({})
    expect(
      SupervueUtils.countBy(0, -1)
    ).toEqual({})
    expect(
      SupervueUtils.countBy(-1, 'type')
    ).toEqual({})
    expect(
      SupervueUtils.countBy([{ type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: 1, b: 1 })
    expect(
      SupervueUtils.countBy([{ type: 'a' }, { type: 'a' }, { type: 'b' }], 'type')
    ).toEqual({ a: 2, b: 1 })
  })

  test('clone()', () => {
    expect(
      SupervueUtils.clone()
    ).toEqual()
    expect(
      SupervueUtils.clone(null)
    ).toEqual(null)
    expect(
      SupervueUtils.clone(undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.clone([])
    ).toEqual([])
    expect(
      SupervueUtils.clone({})
    ).toEqual({})
    expect(
      SupervueUtils.clone(0)
    ).toEqual(0)
    expect(
      SupervueUtils.clone(-1)
    ).toEqual(-1)
    expect(
      SupervueUtils.clone(/\n/)
    ).toEqual(/\n/)
    let v1 = { a: 11, b: { b1: 22 } }
    let v2 = SupervueUtils.clone(v1)
    expect(
      v1.b === v2.b
    ).toEqual(true)
    let v3 = SupervueUtils.clone(v1, true)
    expect(
      v1.b === v3.b
    ).toEqual(false)
  })

  test('clear()', () => {
    expect(
      SupervueUtils.clear()
    ).toEqual()
    expect(
      SupervueUtils.clear(null)
    ).toEqual(null)
    expect(
      SupervueUtils.clear(undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.clear({})
    ).toEqual({})
    expect(
      SupervueUtils.clear([])
    ).toEqual([])
    expect(
      SupervueUtils.clear(/\d/)
    ).toEqual(/\d/)
    expect(
      SupervueUtils.clear(0)
    ).toEqual(0)
    expect(
      SupervueUtils.clear(-1)
    ).toEqual(-1)
    expect(
      SupervueUtils.clear([11, 22, 33, 33])
    ).toEqual([])
    expect(
      SupervueUtils.clear([11, 22, 33, 33], undefined)
    ).toEqual([undefined, undefined, undefined, undefined])
    expect(
      SupervueUtils.clear([11, 22, 33, 33], null)
    ).toEqual([null, null, null, null])
    expect(
      SupervueUtils.clear({ b1: 11, b2: 22 })
    ).toEqual({})
    expect(
      SupervueUtils.clear({ b1: 11, b2: 22 }, undefined)
    ).toEqual({ b1: undefined, b2: undefined })
    expect(
      SupervueUtils.clear({ b1: 11, b2: 22 }, null)
    ).toEqual({ b1: null, b2: null })
  })

  test('remove()', () => {
    let list = [11, 22, 33, 44]
    SupervueUtils.remove(list)
    expect(list).toEqual([])

    list = [11, 22, 33, 44]
    SupervueUtils.remove(list, 2)
    expect(list).toEqual([11, 22, 44])

    list = [11, 22, 33, 44]
    SupervueUtils.remove(list, '2')
    expect(list).toEqual([11, 22, 33, 44])

    list = [11, 22, 33, 44]
    SupervueUtils.remove(list, item => item === 22)
    expect(list).toEqual([11, 33, 44])

    let obj = { a: 11, b: 22, c: 33 }
    SupervueUtils.remove(obj)
    expect(obj).toEqual({})

    obj = { a: 11, b: 22, c: 33 }
    SupervueUtils.remove(obj, item => item === 22)
    expect(obj).toEqual({ a: 11, c: 33 })

    obj = { a: 11, b: 22, c: 33 }
    SupervueUtils.remove(obj, 'c')
    expect(obj).toEqual({ a: 11, b: 22 })

    obj = { a: 11, b: 22, c: 33, 2: 33 }
    SupervueUtils.remove(obj, 2)
    expect(obj).toEqual({ a: 11, b: 22, c: 33, 2: 33 })
  })

  test('range()', () => {
    expect(
      SupervueUtils.range()
    ).toEqual([])
    expect(
      SupervueUtils.range(null)
    ).toEqual([])
    expect(
      SupervueUtils.range(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.range({})
    ).toEqual([])
    expect(
      SupervueUtils.range([])
    ).toEqual([])
    expect(
      SupervueUtils.range(/\d/)
    ).toEqual([])
    expect(
      SupervueUtils.range(-5)
    ).toEqual([])
    expect(
      SupervueUtils.range(0)
    ).toEqual([])
    expect(
      SupervueUtils.range(10)
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(
      SupervueUtils.range(-5, 5)
    ).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4])
    expect(
      SupervueUtils.range(0, 10, 0)
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(
      SupervueUtils.range(0, 10, 2)
    ).toEqual([0, 2, 4, 6, 8])
    expect(
      SupervueUtils.range(1, 50, 10)
    ).toEqual([1, 11, 21, 31, 41])
  })

  test('destructuring()', () => {
    expect(
      SupervueUtils.destructuring()
    ).toEqual(undefined)
    expect(
      SupervueUtils.destructuring(undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.destructuring(null)
    ).toEqual(null)
    expect(
      SupervueUtils.destructuring({})
    ).toEqual({})
    expect(
      SupervueUtils.destructuring([])
    ).toEqual([])
    expect(
      SupervueUtils.destructuring(/\d/)
    ).toEqual(/\d/)
    expect(
      SupervueUtils.destructuring(true)
    ).toEqual(true)
    expect(
      SupervueUtils.destructuring(0)
    ).toEqual(0)
    expect(
      SupervueUtils.destructuring(-1)
    ).toEqual(-1)
    expect(
      SupervueUtils.destructuring(null, { a: 11, b: 22, c: 33 })
    ).toEqual(null)
    expect(
      SupervueUtils.destructuring({}, { a: 11, b: 22, c: 33 })
    ).toEqual({})
    expect(
      SupervueUtils.destructuring({ a: null }, { a: 11, b: 22, c: 33 })
    ).toEqual({ a: 11 })
    expect(
      SupervueUtils.destructuring({ a: 11, d: 44 }, { a: 11, b: 22, c: 33 })
    ).toEqual({ a: 11, d: 44 })
    expect(
      SupervueUtils.destructuring({ a: 11, c: 33, d: 44 }, { a: 11, b: 22, c: null, e: 55, f: 66 })
    ).toEqual({ a: 11, c: null, d: 44 })
  })
})
