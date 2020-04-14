const SupervueUtils = require('../index')

describe('Number functions', () => {
  test('random()', () => {
    let rest = SupervueUtils.random()
    expect(
      rest >= 0 && rest <= 9
    ).toEqual(true)
    rest = SupervueUtils.random(3, 6)
    expect(
      rest >= 3 && rest <= 6
    ).toEqual(true)
    rest = SupervueUtils.random(0, 5)
    expect(
      rest >= 0 && rest <= 5
    ).toEqual(true)
    rest = SupervueUtils.random(10, 100)
    expect(
      rest >= 10 && rest <= 100
    ).toEqual(true)
    rest = SupervueUtils.random(500, 50000)
    expect(
      rest >= 500 && rest <= 50000
    ).toEqual(true)
    rest = SupervueUtils.random(-5, 5)
    expect(
      rest >= -5 && rest <= 5
    ).toEqual(true)
  })

  test('min()', () => {
    expect(
      SupervueUtils.min([22, null, 77, 11])
    ).toEqual(11)
    expect(
      SupervueUtils.min([22, 66, 77, 11])
    ).toEqual(11)
    expect(
      SupervueUtils.min([{ a: 11 }, { a: 44 }], 'a')
    ).toEqual({ a: 11 })
    expect(
      SupervueUtils.min([{ a: 33 }, { a: 11 }, { a: 44 }], item => item.a)
    ).toEqual({ a: 11 })
  })

  test('max()', () => {
    expect(
      SupervueUtils.max([22, 66, null, 11])
    ).toEqual(66)
    expect(
      SupervueUtils.max([22, 66, 77, 11])
    ).toEqual(77)
    expect(
      SupervueUtils.max([{ a: 11 }, { a: 44 }], 'a')
    ).toEqual({ a: 44 })
    expect(
      SupervueUtils.max([{ a: 33 }, { a: 11 }, { a: 44 }], item => item.a)
    ).toEqual({ a: 44 })
  })

  test('commafy()', () => {
    expect(
      SupervueUtils.commafy(0)
    ).toEqual('0')
    expect(
      SupervueUtils.commafy(-1)
    ).toEqual('-1')
    expect(
      SupervueUtils.commafy(12345)
    ).toEqual('12,345')
    expect(
      SupervueUtils.commafy('null')
    ).toEqual('null')
    expect(
      SupervueUtils.commafy(null)
    ).toEqual('')
    expect(
      SupervueUtils.commafy('undefined')
    ).toEqual('undefined')
    expect(
      SupervueUtils.commafy(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.commafy('abcdefg')
    ).toEqual('abcdefg')
    expect(
      SupervueUtils.commafy(1000000)
    ).toEqual('1,000,000')
    expect(
      SupervueUtils.commafy('1000000', { digits: 2 })
    ).toEqual('1,000,000.00')
    expect(
      SupervueUtils.commafy('1000000', { digits: 4 })
    ).toEqual('1,000,000.0000')
    expect(
      SupervueUtils.commafy('1000000.5678', { digits: 3 })
    ).toEqual('1,000,000.568')
    expect(
      SupervueUtils.commafy(6660000000000001, { spaceNumber: 4, separator: ' ' })
    ).toEqual('6660 0000 0000 0001')
    expect(
      SupervueUtils.commafy('111111111111111111111111111111111')
    ).toEqual('111,111,111,111,111,111,111,111,111,111,111')
  })

  test('toFixedString()', () => {
    expect(
      SupervueUtils.toFixedString(null)
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString('null')
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString('-0')
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString('-0.0')
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString([])
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString({})
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString(function () {})
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString(true)
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString('abc')
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString('$123')
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString('123元')
    ).toEqual('123')
    expect(
      SupervueUtils.toFixedString(123)
    ).toEqual('123')
    expect(
      SupervueUtils.toFixedString(null, 2)
    ).toEqual('0.00')
    expect(
      SupervueUtils.toFixedString('1.00', 0)
    ).toEqual('1')
    expect(
      SupervueUtils.toFixedString('0', 2)
    ).toEqual('0.00')
    expect(
      SupervueUtils.toFixedString('0.38996', 4)
    ).toEqual('0.3899')
    expect(
      SupervueUtils.toFixedString('8.3339', 3)
    ).toEqual('8.333')
    expect(
      SupervueUtils.toFixedString(12.3999, 2)
    ).toEqual('12.39')
    expect(
      SupervueUtils.toFixedString('12.3999', 6)
    ).toEqual('12.399900')
    expect(
      SupervueUtils.toFixedString('1452349847.3979', 2)
    ).toEqual('1452349847.39')
    expect(
      SupervueUtils.toFixedString('-1452349847.3979', 5)
    ).toEqual('-1452349847.39790')
    expect(
      SupervueUtils.toFixedString('1452349847.3979', 20)
    ).toEqual('1452349847.39790000000000000000')
    expect(
      SupervueUtils.toFixedString(1e-8)
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString('1e-8', 6)
    ).toEqual('0.000000')
    expect(
      SupervueUtils.toFixedString(1e-8, 8)
    ).toEqual('0.00000001')
    expect(
      SupervueUtils.toFixedString('1e-8', 12)
    ).toEqual('0.000000010000')
    expect(
      SupervueUtils.toFixedString(-1e-12)
    ).toEqual('0')
    expect(
      SupervueUtils.toFixedString('-1e-8', 8)
    ).toEqual('-0.00000001')
    expect(
      SupervueUtils.toFixedString(-123e-8, 4)
    ).toEqual('0.0000')
    expect(
      SupervueUtils.toFixedString('-123e-8', 12)
    ).toEqual('-0.000001230000')
  })

  test('toFixedNumber()', () => {
    expect(
      SupervueUtils.toFixedNumber(null)
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber('null')
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber('-0')
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber('-0.0')
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber([])
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber({})
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber(function () {})
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber(true)
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber('abc')
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber('$123')
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber(null, 2)
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber('123元')
    ).toEqual(123)
    expect(
      SupervueUtils.toFixedNumber(123)
    ).toEqual(123)
    expect(
      SupervueUtils.toFixedNumber('1.00', 0)
    ).toEqual(1)
    expect(
      SupervueUtils.toFixedNumber('0', 2)
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber('0.38996', 4)
    ).toEqual(0.3899)
    expect(
      SupervueUtils.toFixedNumber('8.3339', 3)
    ).toEqual(8.333)
    expect(
      SupervueUtils.toFixedNumber(12.3999, 2)
    ).toEqual(12.39)
    expect(
      SupervueUtils.toFixedNumber('12.3999', 6)
    ).toEqual(12.3999)
    expect(
      SupervueUtils.toFixedNumber('1452349847.3979', 2)
    ).toEqual(1452349847.39)
    expect(
      SupervueUtils.toFixedNumber('-1452349847.3979', 5)
    ).toEqual(-1452349847.3979)
    expect(
      SupervueUtils.toFixedNumber('1452349847.3979', 20)
    ).toEqual(1452349847.3979)
    expect(
      SupervueUtils.toFixedNumber(1e-8)
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber('9e-8', 6)
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber(9e-8, 8)
    ).toEqual(9e-8)
    expect(
      SupervueUtils.toFixedNumber('9e-8', 12)
    ).toEqual(9e-8)
    expect(
      SupervueUtils.toFixedNumber(-9e-12)
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber('-9e-8', 8)
    ).toEqual(-9e-8)
    expect(
      SupervueUtils.toFixedNumber(-923e-8, 4)
    ).toEqual(0)
    expect(
      SupervueUtils.toFixedNumber('-923e-8', 12)
    ).toEqual(-0.00000923)
  })

  test('toNumber()', () => {
    expect(
      SupervueUtils.toNumber([])
    ).toEqual(0)
    expect(
      SupervueUtils.toNumber({})
    ).toEqual(0)
    expect(
      SupervueUtils.toNumber(function () {})
    ).toEqual(0)
    expect(
      SupervueUtils.toNumber(true)
    ).toEqual(0)
    expect(
      SupervueUtils.toNumber('abc')
    ).toEqual(0)
    expect(
      SupervueUtils.toNumber('$123')
    ).toEqual(0)
    expect(
      SupervueUtils.toNumber('123元')
    ).toEqual(123)
    expect(
      SupervueUtils.toNumber(123)
    ).toEqual(123)
    expect(
      SupervueUtils.toNumber('12.3')
    ).toEqual(12.3)
    expect(
      SupervueUtils.toNumber('12456456.66663')
    ).toEqual(12456456.66663)
  })

  test('toInteger()', () => {
    expect(
      SupervueUtils.toInteger(0)
    ).toEqual(0)
    expect(
      SupervueUtils.toInteger(-1)
    ).toEqual(-1)
    expect(
      SupervueUtils.toInteger([])
    ).toEqual(0)
    expect(
      SupervueUtils.toInteger({})
    ).toEqual(0)
    expect(
      SupervueUtils.toInteger(/\d/)
    ).toEqual(0)
    expect(
      SupervueUtils.toInteger(function () {})
    ).toEqual(0)
    expect(
      SupervueUtils.toInteger(true)
    ).toEqual(0)
    expect(
      SupervueUtils.toInteger('abc')
    ).toEqual(0)
    expect(
      SupervueUtils.toInteger(123)
    ).toEqual(123)
    expect(
      SupervueUtils.toInteger(5675.9004)
    ).toEqual(5675)
    expect(
      SupervueUtils.toInteger('12.3')
    ).toEqual(12)
    expect(
      SupervueUtils.toInteger('16572.3657567')
    ).toEqual(16572)
  })

  test('add()', () => {
    expect(
      SupervueUtils.add(0)
    ).toEqual(0)
    expect(
      SupervueUtils.add(0, 0)
    ).toEqual(0)
    expect(
      SupervueUtils.add([])
    ).toEqual(0)
    expect(
      SupervueUtils.add({})
    ).toEqual(0)
    expect(
      SupervueUtils.add(/\d/)
    ).toEqual(0)
    expect(
      SupervueUtils.add(function () {})
    ).toEqual(0)
    expect(
      SupervueUtils.add(true)
    ).toEqual(0)
    expect(
      SupervueUtils.add('abc')
    ).toEqual(0)
    expect(
      SupervueUtils.add('abc', '123')
    ).toEqual(123)
    expect(
      SupervueUtils.add('22', 33)
    ).toEqual(55)
    expect(
      SupervueUtils.add(0, 33)
    ).toEqual(33)
    expect(
      SupervueUtils.add(2000, 500000)
    ).toEqual(502000)
    expect(
      SupervueUtils.add(3.84, 4.78)
    ).toEqual(8.62)
    expect(
      SupervueUtils.add(-3.33, 7.066)
    ).toEqual(3.736)
    expect(
      SupervueUtils.add(0.4598, 5.024666)
    ).toEqual(5.484466)
    expect(
      SupervueUtils.add(-0.4598, 5.0433)
    ).toEqual(4.5835)
    expect(
      SupervueUtils.add(17.67, 1.3)
    ).toEqual(18.97)
    expect(
      SupervueUtils.add(32654.324, 9666.7)
    ).toEqual(42321.024)
    expect(
      SupervueUtils.add(32654.111, 1e-4)
    ).toEqual(32654.1111)
    expect(
      SupervueUtils.add(1e-7, 1e-3)
    ).toEqual(0.0010001)
  })

  test('subtract()', () => {
    expect(
      SupervueUtils.subtract(0)
    ).toEqual(0)
    expect(
      SupervueUtils.subtract(0, 0)
    ).toEqual(0)
    expect(
      SupervueUtils.subtract([])
    ).toEqual(0)
    expect(
      SupervueUtils.subtract({})
    ).toEqual(0)
    expect(
      SupervueUtils.subtract(/\d/)
    ).toEqual(0)
    expect(
      SupervueUtils.subtract(function () {})
    ).toEqual(0)
    expect(
      SupervueUtils.subtract(true)
    ).toEqual(0)
    expect(
      SupervueUtils.subtract('abc')
    ).toEqual(0)
    expect(
      SupervueUtils.subtract('abc', '123')
    ).toEqual(-123)
    expect(
      SupervueUtils.subtract('22', 33)
    ).toEqual(-11)
    expect(
      SupervueUtils.subtract(0, 33)
    ).toEqual(-33)
    expect(
      SupervueUtils.subtract(500000, 2000)
    ).toEqual(498000)
    expect(
      SupervueUtils.subtract(324253.1, 23559.9)
    ).toEqual(300693.2)
    expect(
      SupervueUtils.subtract(6.66, 3.9)
    ).toEqual(2.76)
    expect(
      SupervueUtils.subtract(3.33, 7.066)
    ).toEqual(-3.736)
    expect(
      SupervueUtils.subtract(5.024664, 0.453)
    ).toEqual(4.571664)
    expect(
      SupervueUtils.subtract(25.77, 3.6)
    ).toEqual(22.17)
    expect(
      SupervueUtils.subtract(1e-4, 1.999)
    ).toEqual(-1.9989)
    expect(
      SupervueUtils.subtract(1e-7, 1e-3)
    ).toEqual(-0.0009999)
  })

  test('multiply()', () => {
    expect(
      SupervueUtils.multiply(0)
    ).toEqual(0)
    expect(
      SupervueUtils.multiply(0, 0)
    ).toEqual(0)
    expect(
      SupervueUtils.multiply([])
    ).toEqual(0)
    expect(
      SupervueUtils.multiply({})
    ).toEqual(0)
    expect(
      SupervueUtils.multiply(/\d/)
    ).toEqual(0)
    expect(
      SupervueUtils.multiply(function () {})
    ).toEqual(0)
    expect(
      SupervueUtils.multiply(true)
    ).toEqual(0)
    expect(
      SupervueUtils.multiply('abc')
    ).toEqual(0)
    expect(
      SupervueUtils.multiply('abc', '123')
    ).toEqual(0)
    expect(
      SupervueUtils.multiply('22', 33)
    ).toEqual(726)
    expect(
      SupervueUtils.multiply(0, 33)
    ).toEqual(0)
    expect(
      SupervueUtils.multiply(500000, 2000)
    ).toEqual(1000000000)
    expect(
      SupervueUtils.multiply(6.66, 3.7)
    ).toEqual(24.642)
    expect(
      SupervueUtils.multiply(3.33, 0.9)
    ).toEqual(2.997)
    expect(
      SupervueUtils.multiply(5.024664, 0.453)
    ).toEqual(2.276172792)
    expect(
      SupervueUtils.multiply(25.77, 7.1)
    ).toEqual(182.967)
    expect(
      SupervueUtils.multiply(17.67, 100)
    ).toEqual(1767)
    expect(
      SupervueUtils.multiply(1e-7, 3.3)
    ).toEqual(3.3e-7)
    expect(
      SupervueUtils.multiply(3.3, 0.0000001)
    ).toEqual(3.3e-7)
    expect(
      SupervueUtils.multiply(1e-7, 1e-3)
    ).toEqual(1e-10)
  })

  test('divide()', () => {
    expect(
      SupervueUtils.divide(0)
    ).toEqual(0)
    expect(
      SupervueUtils.divide(0, 0)
    ).toEqual(0)
    expect(
      SupervueUtils.divide([])
    ).toEqual(0)
    expect(
      SupervueUtils.divide({})
    ).toEqual(0)
    expect(
      SupervueUtils.divide(/\d/)
    ).toEqual(0)
    expect(
      SupervueUtils.divide(function () {})
    ).toEqual(0)
    expect(
      SupervueUtils.divide(true)
    ).toEqual(0)
    expect(
      SupervueUtils.divide('abc')
    ).toEqual(0)
    expect(
      SupervueUtils.divide('abc', '123')
    ).toEqual(0)
    expect(
      SupervueUtils.divide('33', 11)
    ).toEqual(3)
    expect(
      SupervueUtils.divide(0, 33)
    ).toEqual(0)
    expect(
      SupervueUtils.divide(21, 3)
    ).toEqual(7)
    expect(
      SupervueUtils.divide(100, 5)
    ).toEqual(20)
    expect(
      SupervueUtils.divide(500000, 2000)
    ).toEqual(250)
    expect(
      SupervueUtils.divide(1024.88, 0.2)
    ).toEqual(5124.4)
    expect(
      SupervueUtils.divide(51.2, 8)
    ).toEqual(6.4)
    expect(
      SupervueUtils.divide(2.997, 0.9)
    ).toEqual(3.33)
    expect(
      SupervueUtils.divide(2.276172792, 0.453)
    ).toEqual(5.024664)
    expect(
      SupervueUtils.divide(182.967, 25.77)
    ).toEqual(7.1)
    expect(
      SupervueUtils.divide(61.11109, 2)
    ).toEqual(30.555545)
    expect(
      SupervueUtils.divide(2641.1, 1e-9)
    ).toEqual(2641100000000)
    expect(
      SupervueUtils.divide(2641.1, 0.000000001)
    ).toEqual(2641100000000)
    expect(
      SupervueUtils.divide(1e-7, 1e-3)
    ).toEqual(0.0001)
  })
})
