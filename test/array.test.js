const SupervueUtils = require('../index')

describe('Array functions', () => {
  test('uniq()', () => {
    expect(
      SupervueUtils.uniq()
    ).toEqual([])
    expect(
      SupervueUtils.uniq(null)
    ).toEqual([])
    expect(
      SupervueUtils.uniq(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.uniq(-1)
    ).toEqual([])
    expect(
      SupervueUtils.uniq(123)
    ).toEqual([])
    expect(
      SupervueUtils.uniq('')
    ).toEqual([])
    expect(
      SupervueUtils.uniq(/\d/)
    ).toEqual([])
    expect(
      SupervueUtils.uniq([])
    ).toEqual([])
    expect(
      SupervueUtils.uniq({})
    ).toEqual([])
    expect(
      SupervueUtils.uniq(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.uniq('abcb')
    ).toEqual(['a', 'b', 'c'])
    expect(
      SupervueUtils.uniq([11, 22, 33, 33, 22, '22'])
    ).toEqual([11, 22, 33, '22'])
    expect(
      SupervueUtils.uniq([11, 22, 33, 33, 22, 55])
    ).toEqual([11, 22, 33, 55])
    expect(
      SupervueUtils.uniq([11, 33, 33, { a: 11 }, { a: 11 }])
    ).toEqual([11, 33, { a: 11 }, { a: 11 }])
    let a1 = { a: 11 }
    expect(
      SupervueUtils.uniq([11, 33, 33, a1, a1])
    ).toEqual([11, 33, { a: 11 }])
  })

  test('union()', () => {
    expect(
      SupervueUtils.union()
    ).toEqual([])
    expect(
      SupervueUtils.union(0)
    ).toEqual([])
    expect(
      SupervueUtils.union(-1)
    ).toEqual([])
    expect(
      SupervueUtils.union(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.union(null)
    ).toEqual([])
    expect(
      SupervueUtils.union('')
    ).toEqual([])
    expect(
      SupervueUtils.union(/\d/)
    ).toEqual([])
    expect(
      SupervueUtils.union({})
    ).toEqual([])
    expect(
      SupervueUtils.union([])
    ).toEqual([])
    expect(
      SupervueUtils.union(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.union([11, 22, 44, 11])
    ).toEqual([11, 22, 44])
    expect(
      SupervueUtils.union([11, 22, 44, 11], [11, 44])
    ).toEqual([11, 22, 44])
    expect(
      SupervueUtils.union([11, 22], [33, 22], [44, 11])
    ).toEqual([11, 22, 33, 44])
  })

  test('slice()', () => {
    expect(
      SupervueUtils.slice(0)
    ).toEqual([])
    expect(
      SupervueUtils.slice(-1)
    ).toEqual([])
    expect(
      SupervueUtils.slice(123)
    ).toEqual([])
    expect(
      SupervueUtils.slice(false)
    ).toEqual([])
    expect(
      SupervueUtils.slice('')
    ).toEqual([])
    expect(
      SupervueUtils.slice(/\d/)
    ).toEqual([])
    expect(
      SupervueUtils.slice({})
    ).toEqual([])
    expect(
      SupervueUtils.slice([])
    ).toEqual([])
    expect(
      SupervueUtils.slice(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.slice([11, 22])
    ).toEqual([11, 22])
    expect(
      SupervueUtils.slice([11, 22, 33, 44], 1)
    ).toEqual([22, 33, 44])
    expect(
      SupervueUtils.slice([11, 22, 33, 44], 1, 3)
    ).toEqual([22, 33])
    let method = function () {
      expect(
        SupervueUtils.slice(arguments, 1, 3)
      ).toEqual([22, 33])
    }
    method(11, 22, 33, 44)
  })

  test('sortBy()', () => {
    expect(
      SupervueUtils.sortBy()
    ).toEqual([])
    expect(
      SupervueUtils.sortBy(null)
    ).toEqual([])
    expect(
      SupervueUtils.sortBy(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.sortBy({})
    ).toEqual([])
    expect(
      SupervueUtils.sortBy(-1)
    ).toEqual([])
    expect(
      SupervueUtils.sortBy(0)
    ).toEqual([])
    expect(
      SupervueUtils.sortBy(123)
    ).toEqual([])
    expect(
      SupervueUtils.sortBy('')
    ).toEqual([])
    expect(
      SupervueUtils.sortBy(/\d/)
    ).toEqual([])
    expect(
      SupervueUtils.sortBy(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.sortBy('abc')
    ).toEqual(['a', 'b', 'c'])
    expect(
      SupervueUtils.sortBy(['b', 'j', 'a', 'c'])
    ).toEqual(['a', 'b', 'c', 'j'])
    expect(
      SupervueUtils.sortBy([11, 55, 99, 22, 9, 1, 10])
    ).toEqual([1, 9, 10, 11, 22, 55, 99])
    expect(
      SupervueUtils.sortBy([11, 55, 99, 77, 11, 55, 22, 10, 9, 111], [])
    ).toEqual([11, 55, 99, 77, 11, 55, 22, 10, 9, 111])
    expect(
      SupervueUtils.sortBy([120, 103, 10, 13, 22, 23, 24, 33, 55, 8, 9, 30, 40, 90, 99, 88, 77, 0, 1, 2, 3, 11, 12, 4, 5, 6, 7, 66, 44, 77, 100])
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 22, 23, 24, 30, 33, 40, 44, 55, 66, 77, 77, 88, 90, 99, 100, 103, 120])
    expect(
      SupervueUtils.sortBy(['11', '55', '99', '77', '11', '55', '22', '0', '9'])
    ).toEqual(['0', '11', '11', '22', '55', '55', '77', '9', '99'])
    expect(
      SupervueUtils.sortBy([null, 'a', 'g', null, null, 'c', 'j'])
    ).toEqual(['a', 'c', 'g', 'j', null, null, null])
    expect(
      SupervueUtils.sortBy([null, 'a', 'g', null, undefined, null, 'c', undefined, 0, 'j'])
    ).toEqual([0, 'a', 'c', 'g', 'j', null, null, null, undefined, undefined])
    expect(
      SupervueUtils.sortBy([{ a: null }, { a: 'g' }, { a: undefined }, { a: 'a' }, { a: null }, { a: null }, { a: 'j' }, { a: 'c' }], 'a')
    ).toEqual([{ a: 'a' }, { a: 'c' }, { a: 'g' }, { a: 'j' }, { a: null }, { a: null }, { a: null }, { a: undefined }])
    expect(
      SupervueUtils.sortBy([{ age: 27 }, { age: 26 }, { age: 28 }], 'age')
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      SupervueUtils.sortBy([{ age: 27 }, { age: 26 }, { age: 28 }], ['age'])
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      SupervueUtils.sortBy([{ a: { b: 66 } }, { a: { b: 33 } }, { a: { b: 11 } }], 'a.b')
    ).toEqual([{ a: { b: 11 } }, { a: { b: 33 } }, { a: { b: 66 } }])
    expect(
      SupervueUtils.sortBy([{ a: { b: 66 } }, { a: { b: 33 } }, { a: { b: 11 } }], ['a.b'])
    ).toEqual([{ a: { b: 11 } }, { a: { b: 33 } }, { a: { b: 66 } }])
    expect(
      SupervueUtils.sortBy([{ a: { b: 66 }, c: 6 }, { a: { b: 33 }, c: 9 }, { a: { b: 11 }, c: 6 }], ['c', 'a.b'])
    ).toEqual([{ a: { b: 11 }, c: 6 }, { a: { b: 66 }, c: 6 }, { a: { b: 33 }, c: 9 }])
    expect(
      SupervueUtils.sortBy([{ age: 27 }, { age: 26 }, { age: 28 }], item => item.age)
    ).toEqual([{ age: 26 }, { age: 27 }, { age: 28 }])
    expect(
      SupervueUtils.sortBy([{ name: 'x' }, { name: 'l' }, { name: 'a' }], [item => item.name])
    ).toEqual([{ name: 'a' }, { name: 'l' }, { name: 'x' }])
    expect(
      SupervueUtils.sortBy([
        { name: 'x', age: 25 },
        { name: 'd', age: 27 },
        { name: 'z', age: 27 },
        { name: 'x', age: 24 },
        { name: 'x', age: 26 },
        { name: 'z', age: 26 }
      ], ['name', 'age'])
    ).toEqual([
      { name: 'd', age: 27 },
      { name: 'x', age: 24 },
      { name: 'x', age: 25 },
      { name: 'x', age: 26 },
      { name: 'z', age: 26 },
      { name: 'z', age: 27 }
    ])
    expect(
      SupervueUtils.sortBy([
        { name: 'x', age: 26 },
        { name: 'd', age: 27 },
        { name: 'z', age: 26 },
        { name: 'z', age: 26 }
      ], ['age', 'name'])
    ).toEqual([
      { name: 'x', age: 26 },
      { name: 'z', age: 26 },
      { name: 'z', age: 26 },
      { name: 'd', age: 27 }
    ])
    expect(
      SupervueUtils.sortBy([
        { name: 'x', age: 26 },
        { name: 'd', age: 27 },
        { name: 'x', age: 26 },
        { name: 'z', age: 26 }
      ], [item => item.name, item => item.age])
    ).toEqual([
      { name: 'd', age: 27 },
      { name: 'x', age: 26 },
      { name: 'x', age: 26 },
      { name: 'z', age: 26 }
    ])
    expect(
      SupervueUtils.sortBy([
        { name: 'x', age: 26 },
        { name: 'd', age: 27 },
        { name: 'z', age: 26 },
        { name: 'z', age: 26 }]
      , ['age', item => item.name])
    ).toEqual([
      { name: 'x', age: 26 },
      { name: 'z', age: 26 },
      { name: 'z', age: 26 },
      { name: 'd', age: 27 }
    ])
    expect(
      SupervueUtils.sortBy([
        { name: 'x', age: 26, height: 176 },
        { name: 'd', age: 27, height: 176 },
        { name: 'z', age: 26, height: 178 },
        { name: 'z', age: 26, height: 176 },
        { name: 'd', age: 27, height: 175 }
      ], ['name', 'age', 'height'])
    ).toEqual([
      { name: 'd', age: 27, height: 175 },
      { name: 'd', age: 27, height: 176 },
      { name: 'x', age: 26, height: 176 },
      { name: 'z', age: 26, height: 176 },
      { name: 'z', age: 26, height: 178 }
    ])
  })

  test('shuffle()', () => {
    expect(
      SupervueUtils.shuffle()
    ).toEqual([])
    expect(
      SupervueUtils.shuffle(null)
    ).toEqual([])
    expect(
      SupervueUtils.shuffle(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.shuffle('')
    ).toEqual([])
    expect(
      SupervueUtils.shuffle(/\d/)
    ).toEqual([])
    expect(
      SupervueUtils.shuffle(0)
    ).toEqual([])
    expect(
      SupervueUtils.shuffle(-1)
    ).toEqual([])
    expect(
      SupervueUtils.shuffle(333)
    ).toEqual([])
    expect(
      SupervueUtils.shuffle(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.shuffle([])
    ).toEqual([])
    expect(
      SupervueUtils.shuffle('abc').length
    ).toEqual(3)
    expect(
      SupervueUtils.shuffle([11, '22', 33, '44']).length
    ).toEqual(4)
    expect(
      SupervueUtils.shuffle([11, 22, 33, 44, 55]).length
    ).toEqual(5)
    expect(
      SupervueUtils.shuffle([{ a: 11 }, { b: 22 }, { c: 33 }]).length
    ).toEqual(3)
  })

  test('sample()', () => {
    expect(
      SupervueUtils.sample()
    ).toEqual(undefined)
    expect(
      SupervueUtils.sample(null)
    ).toEqual(undefined)
    expect(
      SupervueUtils.sample(undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.sample({})
    ).toEqual(undefined)
    expect(
      SupervueUtils.sample(-1)
    ).toEqual(undefined)
    expect(
      SupervueUtils.sample(0)
    ).toEqual(undefined)
    expect(
      SupervueUtils.sample(456)
    ).toEqual(undefined)
    expect(
      SupervueUtils.sample([])
    ).toEqual(undefined)
    expect(
      SupervueUtils.sample(0)
    ).toEqual(undefined)
    expect(
      SupervueUtils.sample(function () {})
    ).toEqual(undefined)
    expect(
      SupervueUtils.sample(null, 4)
    ).toEqual([])
    expect(
      SupervueUtils.sample(undefined, 2)
    ).toEqual([])
    expect(
      SupervueUtils.sample([], undefined)
    ).toEqual([])
    expect(
      SupervueUtils.sample([], null)
    ).toEqual([])
    expect(
      SupervueUtils.sample({}, 2)
    ).toEqual([])
    expect(
      SupervueUtils.sample(-1, 3)
    ).toEqual([])
    expect(
      SupervueUtils.sample([], 2)
    ).toEqual([])
    expect(
      ['a', 'b', 'c'].includes(SupervueUtils.sample('abc'))
    ).toEqual(true)
    expect(
      SupervueUtils.sample('abc', 2).length
    ).toEqual(2)
    expect(
      [11, 22, 33, 44, 55].includes(SupervueUtils.sample([11, 22, 33, 44, 55]))
    ).toEqual(true)
    expect(
      SupervueUtils.sample([11, 22, 33, 44, 55], 2).length
    ).toEqual(2)
    expect(
      SupervueUtils.sample([11, 22, 33, 44, 55], 3).length
    ).toEqual(3)
  })

  test('some()', () => {
    expect(
      SupervueUtils.some()
    ).toEqual(false)
    expect(
      SupervueUtils.some(null)
    ).toEqual(false)
    expect(
      SupervueUtils.some(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.some({})
    ).toEqual(false)
    expect(
      SupervueUtils.some(/\d/)
    ).toEqual(false)
    expect(
      SupervueUtils.some(0)
    ).toEqual(false)
    expect(
      SupervueUtils.some(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.some(123)
    ).toEqual(false)
    expect(
      SupervueUtils.some([])
    ).toEqual(false)
    expect(
      SupervueUtils.some('abc')
    ).toEqual(false)
    expect(
      SupervueUtils.some([{ value: 11 }, { value: 22 }], item => item.value === 55)
    ).toEqual(false)
    expect(
      SupervueUtils.some({ a: 11, b: 22, c: 33 }, item => item === 44)
    ).toEqual(false)
    expect(
      SupervueUtils.some(['a', 1, {}, 'b'], item => SupervueUtils.isString(item))
    ).toEqual(true)
    expect(
      SupervueUtils.some({ a: 11, b: 22, c: 33 }, item => item === 22)
    ).toEqual(true)
    expect(
      SupervueUtils.some('abc', item => item === 'b')
    ).toEqual(true)
    expect(
      SupervueUtils.some([{ value: 11 }, { value: 22 }], item => item.value > 10)
    ).toEqual(true)
  })

  test('every()', () => {
    expect(
      SupervueUtils.every()
    ).toEqual(true)
    expect(
      SupervueUtils.every(null)
    ).toEqual(true)
    expect(
      SupervueUtils.every(undefined)
    ).toEqual(true)
    expect(
      SupervueUtils.every({})
    ).toEqual(true)
    expect(
      SupervueUtils.every(/\W/)
    ).toEqual(true)
    expect(
      SupervueUtils.every(0)
    ).toEqual(true)
    expect(
      SupervueUtils.every(-1)
    ).toEqual(true)
    expect(
      SupervueUtils.every(123)
    ).toEqual(true)
    expect(
      SupervueUtils.every([])
    ).toEqual(true)
    expect(
      SupervueUtils.every(function () {})
    ).toEqual(true)
    expect(
      SupervueUtils.every('')
    ).toEqual(true)
    expect(
      SupervueUtils.every('abc')
    ).toEqual(true)
    expect(
      SupervueUtils.every('abc', item => SupervueUtils.isString(item))
    ).toEqual(true)
    expect(
      SupervueUtils.every([{ value: 11 }, { value: 22 }], item => item.value >= 11)
    ).toEqual(true)
    expect(
      SupervueUtils.every(['a', 1, {}, 'b'], item => SupervueUtils.isString(item))
    ).toEqual(false)
    expect(
      SupervueUtils.every([{ value: 11 }, { value: 22 }], item => item.value === 11)
    ).toEqual(false)
  })

  test('filter()', () => {
    expect(
      SupervueUtils.filter()
    ).toEqual([])
    expect(
      SupervueUtils.filter(null)
    ).toEqual([])
    expect(
      SupervueUtils.filter(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.filter({})
    ).toEqual([])
    expect(
      SupervueUtils.filter(0)
    ).toEqual([])
    expect(
      SupervueUtils.filter(-1)
    ).toEqual([])
    expect(
      SupervueUtils.filter(123)
    ).toEqual([])
    expect(
      SupervueUtils.filter([])
    ).toEqual([])
    expect(
      SupervueUtils.filter(/\s/)
    ).toEqual([])
    expect(
      SupervueUtils.filter('')
    ).toEqual([])
    expect(
      SupervueUtils.filter('abc')
    ).toEqual([])
    expect(
      SupervueUtils.filter(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.filter({ a: 11, b: 22 }, item => item > 22)
    ).toEqual([])
    expect(
      SupervueUtils.filter('abc', item => ['b', 'c'].includes(item))
    ).toEqual(['b', 'c'])
    expect(
      SupervueUtils.filter({ a: 11, b: 22 }, item => item > 11)
    ).toEqual([22])
    expect(
      SupervueUtils.filter([{ value: 11 }, { value: 22 }], item => item.value > 33)
    ).toEqual([])
    expect(
      SupervueUtils.filter([{ value: 11 }, { value: 22 }], item => item.value > 11)
    ).toEqual([{ value: 22 }])
  })

  test('find()', () => {
    expect(
      SupervueUtils.find()
    ).toEqual(undefined)
    expect(
      SupervueUtils.find(null)
    ).toEqual(undefined)
    expect(
      SupervueUtils.find(undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.find(0)
    ).toEqual(undefined)
    expect(
      SupervueUtils.find(-1)
    ).toEqual(undefined)
    expect(
      SupervueUtils.find(123)
    ).toEqual(undefined)
    expect(
      SupervueUtils.find('')
    ).toEqual(undefined)
    expect(
      SupervueUtils.find('abc')
    ).toEqual(undefined)
    expect(
      SupervueUtils.find({})
    ).toEqual(undefined)
    expect(
      SupervueUtils.find([])
    ).toEqual(undefined)
    expect(
      SupervueUtils.find(function () {})
    ).toEqual(undefined)
    expect(
      SupervueUtils.find({ a: 11, b: 22, c: 33 }, item => item > 15)
    ).toEqual(22)
    expect(
      SupervueUtils.find([{ value: 11 }, { value: 22 }], item => item.value === 66)
    ).toEqual(undefined)
    expect(
      SupervueUtils.find([{ value: 11 }, { value: 22 }], item => item.value === 22)
    ).toEqual({ value: 22 })
  })

  test('findKey()', () => {
    expect(
      SupervueUtils.findKey()
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey([])
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey()
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey(null)
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey(undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey(0)
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey(-1)
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey(123)
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey(/\D/)
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey(function () {})
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey('')
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey('abc')
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey('abc', item => item === 'b')
    ).toEqual('1')
    expect(
      SupervueUtils.findKey([{ value: 11 }, { value: 22 }])
    ).toEqual(undefined)
    expect(
      SupervueUtils.findKey([{ value: 11 }, { value: 22 }], item => item.value === 22)
    ).toEqual('1')
    expect(
      SupervueUtils.findKey({ aa: 11, bb: 22, cc: 33 }, item => item === 22)
    ).toEqual('bb')
  })

  test('map()', () => {
    expect(
      SupervueUtils.map()
    ).toEqual([])
    expect(
      SupervueUtils.map(null)
    ).toEqual([])
    expect(
      SupervueUtils.map(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.map(-1)
    ).toEqual([])
    expect(
      SupervueUtils.map(0)
    ).toEqual([])
    expect(
      SupervueUtils.map(123)
    ).toEqual([])
    expect(
      SupervueUtils.map(/\d/)
    ).toEqual([])
    expect(
      SupervueUtils.map('abc')
    ).toEqual([])
    expect(
      SupervueUtils.map([])
    ).toEqual([])
    expect(
      SupervueUtils.map({})
    ).toEqual([])
    expect(
      SupervueUtils.map(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.map([], item => item.value)
    ).toEqual([])
    expect(
      SupervueUtils.map('abc', item => item)
    ).toEqual(['a', 'b', 'c'])
    expect(
      SupervueUtils.map({ a: 11, b: 22, c: 33 }, item => item)
    ).toEqual([11, 22, 33])
    expect(
      SupervueUtils.map([11, 22, 33], item => item * 2)
    ).toEqual([22, 44, 66])
    expect(
      SupervueUtils.map([{ value: 11 }, { value: 22 }], item => item.value)
    ).toEqual([11, 22])
  })

  test('sum()', () => {
    expect(
      SupervueUtils.sum()
    ).toEqual(0)
    expect(
      SupervueUtils.sum(undefined)
    ).toEqual(0)
    expect(
      SupervueUtils.sum(0)
    ).toEqual(0)
    expect(
      SupervueUtils.sum(-1)
    ).toEqual(0)
    expect(
      SupervueUtils.sum(10)
    ).toEqual(0)
    expect(
      SupervueUtils.sum(null)
    ).toEqual(0)
    expect(
      SupervueUtils.sum('')
    ).toEqual(0)
    expect(
      SupervueUtils.sum(/\w/)
    ).toEqual(0)
    expect(
      SupervueUtils.sum({})
    ).toEqual(0)
    expect(
      SupervueUtils.sum([])
    ).toEqual(0)
    expect(
      SupervueUtils.sum(function () {})
    ).toEqual(0)
    expect(
      SupervueUtils.sum([22, 66, 88])
    ).toEqual(176)
    expect(
      SupervueUtils.sum([{ value: 11 }, { value: 22 }, { value: 66 }], 'value')
    ).toEqual(99)
    expect(
      SupervueUtils.sum({ val1: 21, val2: 34, val3: 47 })
    ).toEqual(102)
  })

  test('mean()', () => {
    expect(
      SupervueUtils.mean()
    ).toEqual(0)
    expect(
      SupervueUtils.mean(undefined)
    ).toEqual(0)
    expect(
      SupervueUtils.mean(0)
    ).toEqual(0)
    expect(
      SupervueUtils.mean(-1)
    ).toEqual(0)
    expect(
      SupervueUtils.mean(10)
    ).toEqual(0)
    expect(
      SupervueUtils.mean(null)
    ).toEqual(0)
    expect(
      SupervueUtils.mean('')
    ).toEqual(0)
    expect(
      SupervueUtils.mean(/\w/)
    ).toEqual(0)
    expect(
      SupervueUtils.mean([])
    ).toEqual(0)
    expect(
      SupervueUtils.mean({})
    ).toEqual(0)
    expect(
      SupervueUtils.mean(function () {})
    ).toEqual(0)
    expect(
      SupervueUtils.mean({ val1: 21, val2: 34, val3: 47 })
    ).toEqual(34)
    expect(
      SupervueUtils.mean([22, 66, 60, 60])
    ).toEqual(52)
    expect(
      SupervueUtils.mean([{ value: 34 }, { value: 22 }], 'value')
    ).toEqual(28)
    expect(
      SupervueUtils.mean([{ value: 11 }, { value: 22 }, { value: 66 }], item => item.value * 2)
    ).toEqual(66)
    expect(
      SupervueUtils.mean({ val1: 21, val2: 34, val3: 45, val4: 55 })
    ).toEqual(38.75)
  })

  test('reduce()', () => {
    expect(
      SupervueUtils.reduce()
    ).toEqual(undefined)
    expect(
      SupervueUtils.reduce(null)
    ).toEqual(undefined)
    expect(
      SupervueUtils.reduce(undefined)
    ).toEqual(undefined)
    expect(
      SupervueUtils.reduce(0)
    ).toEqual(undefined)
    expect(
      SupervueUtils.reduce(-1)
    ).toEqual(undefined)
    expect(
      SupervueUtils.reduce(333)
    ).toEqual(undefined)
    expect(
      SupervueUtils.reduce('')
    ).toEqual(undefined)
    expect(
      SupervueUtils.reduce(function () {})
    ).toEqual(undefined)
    expect(
      SupervueUtils.reduce(null, (previous, item) => previous + item)
    ).toEqual(undefined)
    expect(
      SupervueUtils.reduce({}, (previous, item) => previous + item)
    ).toEqual(SupervueUtils.reduce({}, (previous, item) => previous + item))
    expect(
      SupervueUtils.reduce([], (previous, item) => previous + item)
    ).toEqual(SupervueUtils.reduce({}, (previous, item) => previous + item))
    expect(
      SupervueUtils.reduce([22, 66, 88], (previous, item) => previous + item)
    ).toEqual(176)
    expect(
      SupervueUtils.reduce([22, 66, 88], (previous, item) => previous + item, 0)
    ).toEqual(176)
    expect(
      SupervueUtils.reduce([{ num: 11 }, { num: 22 }, { num: 33 }], (previous, item) => previous + item.num, 0)
    ).toEqual(66)
  })

  test('copyWithin()', () => {
    expect(
      SupervueUtils.copyWithin([11, 22, 33, 44], 0, 2)
    ).toEqual([33, 44, 33, 44])
    expect(
      SupervueUtils.copyWithin([11, 22, 33, 44], 0, -1)
    ).toEqual([44, 22, 33, 44])
  })

  test('chunk()', () => {
    expect(
      SupervueUtils.chunk()
    ).toEqual([])
    expect(
      SupervueUtils.chunk(0)
    ).toEqual([])
    expect(
      SupervueUtils.chunk(-1)
    ).toEqual([])
    expect(
      SupervueUtils.chunk('')
    ).toEqual([])
    expect(
      SupervueUtils.chunk(123)
    ).toEqual([])
    expect(
      SupervueUtils.chunk('123')
    ).toEqual([])
    expect(
      SupervueUtils.chunk(/\d/)
    ).toEqual([])
    expect(
      SupervueUtils.chunk(null)
    ).toEqual([])
    expect(
      SupervueUtils.chunk(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.chunk({})
    ).toEqual([])
    expect(
      SupervueUtils.chunk([])
    ).toEqual([])
    expect(
      SupervueUtils.chunk(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.chunk(['a', 'b', 'c', 'd'])
    ).toEqual([['a'], ['b'], ['c'], ['d']])
    expect(
      SupervueUtils.chunk(['a', 'b', 'c', 'd'], 2)
    ).toEqual([['a', 'b'], ['c', 'd']])
    expect(
      SupervueUtils.chunk(['a', 'b', 'c', 'd'], 3)
    ).toEqual([['a', 'b', 'c'], ['d']])
  })

  test('zip()', () => {
    expect(
      SupervueUtils.zip()
    ).toEqual([])
    expect(
      SupervueUtils.zip(null)
    ).toEqual([])
    expect(
      SupervueUtils.zip(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.zip(-1)
    ).toEqual([])
    expect(
      SupervueUtils.zip(0)
    ).toEqual([])
    expect(
      SupervueUtils.zip(123)
    ).toEqual([])
    expect(
      SupervueUtils.zip('')
    ).toEqual([])
    expect(
      SupervueUtils.zip(/\w/)
    ).toEqual([])
    expect(
      SupervueUtils.zip({})
    ).toEqual([])
    expect(
      SupervueUtils.zip([])
    ).toEqual([])
    expect(
      SupervueUtils.zip(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.zip(['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20])
    ).toEqual([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
  })

  test('unzip()', () => {
    expect(
      SupervueUtils.unzip()
    ).toEqual([])
    expect(
      SupervueUtils.unzip(null)
    ).toEqual([])
    expect(
      SupervueUtils.unzip(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.unzip(-1)
    ).toEqual([])
    expect(
      SupervueUtils.unzip(0)
    ).toEqual([])
    expect(
      SupervueUtils.unzip(123)
    ).toEqual([])
    expect(
      SupervueUtils.unzip('')
    ).toEqual([])
    expect(
      SupervueUtils.unzip(/\d/)
    ).toEqual([])
    expect(
      SupervueUtils.unzip({})
    ).toEqual([])
    expect(
      SupervueUtils.unzip([])
    ).toEqual([])
    expect(
      SupervueUtils.unzip(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.unzip([['name1', true, 30], ['name2', true, 40], ['name3', false, 20]])
    ).toEqual([['name1', 'name2', 'name3'], [true, true, false], [30, 40, 20]])
  })

  test('zipObject()', () => {
    expect(
      SupervueUtils.zipObject()
    ).toEqual({})
    expect(
      SupervueUtils.zipObject(null)
    ).toEqual({})
    expect(
      SupervueUtils.zipObject(undefined)
    ).toEqual({})
    expect(
      SupervueUtils.zipObject(0)
    ).toEqual({})
    expect(
      SupervueUtils.zipObject(-1)
    ).toEqual({})
    expect(
      SupervueUtils.zipObject(123)
    ).toEqual({})
    expect(
      SupervueUtils.zipObject(/\d/)
    ).toEqual({})
    expect(
      SupervueUtils.zipObject(null)
    ).toEqual({})
    expect(
      SupervueUtils.zipObject(undefined)
    ).toEqual({})
    expect(
      SupervueUtils.zipObject(false)
    ).toEqual({})
    expect(
      SupervueUtils.zipObject({})
    ).toEqual({})
    expect(
      SupervueUtils.zipObject([])
    ).toEqual({})
    expect(
      SupervueUtils.zipObject(function () {})
    ).toEqual({})
    expect(
      SupervueUtils.zipObject({ a: 'aa', b: 'bb' }, [11, 22, 33])
    ).toEqual({ aa: 11, bb: 22 })
    expect(
      SupervueUtils.zipObject({ 0: 'aa', 1: 'bb', 2: 'cc' }, [11, 22])
    ).toEqual({ aa: 11, bb: 22, cc: undefined })
    expect(
      SupervueUtils.zipObject(['aa', 'bb', 'cc'], [11, 22, 33])
    ).toEqual({ aa: 11, bb: 22, cc: 33 })
    expect(
      SupervueUtils.zipObject(['aa', 'bb', 'cc'], [11, 22])
    ).toEqual({ aa: 11, bb: 22, cc: undefined })
  })

  test('flatten()', () => {
    expect(
      SupervueUtils.flatten()
    ).toEqual([])
    expect(
      SupervueUtils.flatten(null)
    ).toEqual([])
    expect(
      SupervueUtils.flatten(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.flatten(0)
    ).toEqual([])
    expect(
      SupervueUtils.flatten('')
    ).toEqual([])
    expect(
      SupervueUtils.flatten([])
    ).toEqual([])
    expect(
      SupervueUtils.flatten({})
    ).toEqual([])
    expect(
      SupervueUtils.flatten(/\d/)
    ).toEqual([])
    expect(
      SupervueUtils.flatten(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.flatten([[1, 2, 3], [4, 5, 6], [7, 8]])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    expect(
      SupervueUtils.flatten([1, [2, [3, [4]], 5]])
    ).toEqual([1, 2, [3, [4]], 5])
    expect(
      SupervueUtils.flatten([1, [2, [3, [4]], 5]], true)
    ).toEqual([1, 2, 3, 4, 5])
    expect(
      SupervueUtils.flatten([1, [2, [3, [4]], [[[5], [6, [7]]]]]], true)
    ).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  test('toArray()', () => {
    expect(
      SupervueUtils.toArray()
    ).toEqual([])
    expect(
      SupervueUtils.toArray(null)
    ).toEqual([])
    expect(
      SupervueUtils.toArray(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.toArray(0)
    ).toEqual([])
    expect(
      SupervueUtils.toArray('')
    ).toEqual([])
    expect(
      SupervueUtils.toArray(true)
    ).toEqual([])
    expect(
      SupervueUtils.toArray(/1,2,3/)
    ).toEqual([])
    expect(
      SupervueUtils.toArray([])
    ).toEqual([])
    expect(
      SupervueUtils.toArray({})
    ).toEqual([])
    expect(
      SupervueUtils.toArray(10)
    ).toEqual([])
    expect(
      SupervueUtils.toArray(function () { })
    ).toEqual([])
    expect(
      SupervueUtils.toArray({ name: 'test1', age: 25 })
    ).toEqual(['test1', 25])
  })

  test('includeArrays()', () => {
    expect(
      SupervueUtils.includeArrays()
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays(null)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays(null, null)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays(null, undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays(undefined, null)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays(undefined, undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays(undefined, -1)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays(-1, undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays(null, [])
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays(0, undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays(undefined, null)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays(0, -1)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays({}, [])
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays([], 0)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays([], null)
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays([], {})
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays([11, 22, 33], { 0: 11, 1: 22 })
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays([11, 22, 33], [11, 22, 33, 44])
    ).toEqual(false)
    expect(
      SupervueUtils.includeArrays([], [])
    ).toEqual(true)
    expect(
      SupervueUtils.includeArrays([11, 22, 33], [])
    ).toEqual(true)
    expect(
      SupervueUtils.includeArrays([11, 22, 33], [11])
    ).toEqual(true)
    expect(
      SupervueUtils.includeArrays([11, 22, 33], [22, 33])
    ).toEqual(true)
    expect(
      SupervueUtils.includeArrays([11, 22, 33], [22, 44])
    ).toEqual(false)
  })

  test('pluck()', () => {
    expect(
      SupervueUtils.pluck()
    ).toEqual([])
    expect(
      SupervueUtils.pluck(null)
    ).toEqual([])
    expect(
      SupervueUtils.pluck(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.pluck(-1)
    ).toEqual([])
    expect(
      SupervueUtils.pluck(0)
    ).toEqual([])
    expect(
      SupervueUtils.pluck(123)
    ).toEqual([])
    expect(
      SupervueUtils.pluck(/\d/)
    ).toEqual([])
    expect(
      SupervueUtils.pluck([])
    ).toEqual([])
    expect(
      SupervueUtils.pluck({})
    ).toEqual([])
    expect(
      SupervueUtils.pluck(function () {})
    ).toEqual([])
    expect(
      SupervueUtils.pluck([{ a: 11, b: 22 }, { a: 33, b: 44 }], 'a')
    ).toEqual([11, 33])
    expect(
      SupervueUtils.pluck([[11, 22, 33], [44, 55, 66]], 1)
    ).toEqual([22, 55])
  })

  test('invoke()', () => {
    expect(
      SupervueUtils.invoke()
    ).toEqual([])
    expect(
      SupervueUtils.invoke(null)
    ).toEqual([])
    expect(
      SupervueUtils.invoke(undefined)
    ).toEqual([])
    expect(
      SupervueUtils.invoke(-1)
    ).toEqual([])
    expect(
      SupervueUtils.invoke(0)
    ).toEqual([])
    expect(
      SupervueUtils.invoke([])
    ).toEqual([])
    expect(
      SupervueUtils.invoke({})
    ).toEqual([])
    expect(
      SupervueUtils.invoke([
        [3, 1, 6, 7],
        [3, 2, 1, 8],
        [3, 2, 5, 9, 6],
        [3, 3, 1, 2]
      ], 'sort')
    ).toEqual([
      [1, 3, 6, 7],
      [1, 2, 3, 8],
      [2, 3, 5, 6, 9],
      [1, 2, 3, 3]
    ])
    expect(
      SupervueUtils.invoke(['123', '456'], 'split')
    ).toEqual([['123'], ['456']])
    expect(
      SupervueUtils.invoke([123, 456], String.prototype.split, '')
    ).toEqual([['1', '2', '3'], ['4', '5', '6']])
    expect(
      SupervueUtils.invoke([{ a: { b: [2, 0, 1] } }, { a: { b: [2, 1] } }, { a: { b: [4, 8, 1] } }], ['a', 'b', 'sort'])
    ).toEqual([[0, 1, 2], [1, 2], [1, 4, 8]])
  })

  test('toArrayTree()', () => {
    expect(
      SupervueUtils.toArrayTree()
    ).toEqual([])
    expect(
      SupervueUtils.toArrayTree(null)
    ).toEqual([])
    expect(
      SupervueUtils.toArrayTree(0)
    ).toEqual([])
    expect(
      SupervueUtils.toArrayTree(-1)
    ).toEqual([])
    expect(
      SupervueUtils.toArrayTree(123)
    ).toEqual([])
    expect(
      SupervueUtils.toArrayTree([])
    ).toEqual([])
    expect(
      SupervueUtils.toArrayTree({})
    ).toEqual([])
    expect(
      SupervueUtils.toArrayTree(function () {})
    ).toEqual([])
    let list1 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' }
    ]
    expect(
      SupervueUtils.toArrayTree(list1)
    ).toEqual([
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ])
    let list2 = [
      { id: 1, name: '111', seq: 5 },
      { id: 2, parentId: 1, name: '222', seq: 3 },
      { id: 3, name: '333', seq: 6 },
      { id: 4, parentId: 2, name: '444', seq: 2 },
      { id: 5, parentId: 1, name: '555', seq: 1 }
    ]
    expect(
      SupervueUtils.toArrayTree(list2, { sortKey: 'seq' })
    ).toEqual([
      {
        id: 1,
        name: '111',
        seq: 5,
        children: [
          {
            id: 5,
            parentId: 1,
            name: '555',
            seq: 1,
            children: []
          },
          {
            id: 2,
            parentId: 1,
            name: '222',
            seq: 3,
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                seq: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        seq: 6,
        children: []
      }
    ])
    let list3 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' },
      { id: 5, parentId: 22, name: '555' }
    ]
    expect(
      SupervueUtils.toArrayTree(list3, { data: 'data' })
    ).toEqual([
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      },
      {
        data: { id: 5, parentId: 22, name: '555' },
        id: 5,
        parentId: 22,
        children: []
      }
    ])
    let list4 = [
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 3, name: '333' },
      { id: 4, parentId: 2, name: '444' },
      { id: 5, parentId: 22, name: '555' }
    ]
    expect(
      SupervueUtils.toArrayTree(list4, { strict: true, parentKey: 'parentId', key: 'id', children: 'children', data: 'data' })
    ).toEqual([
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      }
    ])
  })

  test('toTreeArray()', () => {
    expect(
      SupervueUtils.toTreeArray()
    ).toEqual([])
    expect(
      SupervueUtils.toTreeArray(null)
    ).toEqual([])
    expect(
      SupervueUtils.toTreeArray(0)
    ).toEqual([])
    expect(
      SupervueUtils.toTreeArray(-1)
    ).toEqual([])
    expect(
      SupervueUtils.toTreeArray(123)
    ).toEqual([])
    expect(
      SupervueUtils.toTreeArray([])
    ).toEqual([])
    expect(
      SupervueUtils.toTreeArray({})
    ).toEqual([])
    expect(
      SupervueUtils.toTreeArray(function () {})
    ).toEqual([])
    let list1 = [
      {
        id: 1,
        name: '111',
        children: [
          {
            id: 2,
            parentId: 1,
            name: '222',
            children: [
              {
                id: 4,
                parentId: 2,
                name: '444',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '333',
        children: []
      }
    ]
    expect(
      SupervueUtils.toTreeArray(list1)
    ).toEqual([
      list1[0],
      list1[0].children[0],
      list1[0].children[0].children[0],
      list1[1]
    ])
    let list2 = [
      {
        data: { id: 1, name: '111' },
        id: 1,
        children: [
          {
            data: { id: 2, parentId: 1, name: '222' },
            id: 2,
            parentId: 1,
            children: [
              {
                data: { id: 4, parentId: 2, name: '444' },
                id: 4,
                parentId: 2,
                children: []
              }
            ]
          }
        ]
      },
      {
        data: { id: 3, name: '333' },
        id: 3,
        children: []
      },
      {
        data: { id: 5, parentId: 22, name: '555' },
        id: 5,
        parentId: 22,
        children: []
      }
    ]
    expect(
      SupervueUtils.toTreeArray(list2, { data: 'data' })
    ).toEqual([
      { id: 1, name: '111' },
      { id: 2, parentId: 1, name: '222' },
      { id: 4, parentId: 2, name: '444' },
      { id: 3, name: '333' },
      { id: 5, parentId: 22, name: '555' }
    ])
  })

  test('findTree()', () => {
    let rest
    expect(
      SupervueUtils.findTree(0, item => item)
    ).toEqual(undefined)
    expect(
      SupervueUtils.findTree(null, item => item)
    ).toEqual(undefined)
    expect(
      SupervueUtils.findTree(undefined, item => item)
    ).toEqual(undefined)
    expect(
      SupervueUtils.findTree([], item => item)
    ).toEqual(undefined)
    rest = SupervueUtils.findTree([{ a: 11 }], item => item.a === 11)
    expect(rest.item).toEqual({ a: 11 })
    rest = SupervueUtils.findTree([{ a: 11 }, { a: 22 }, { a: 33, children: [{ a: 44 }] }], item => item.a === 44)
    expect(rest.item).toEqual({ a: 44 })
    rest = SupervueUtils.findTree([{ a: 11 }, { a: 22 }, { a: 33, childs: [{ a: 44 }] }], item => item.a === 44, { children: 'childs' })
    expect(rest.item).toEqual({ a: 44 })
  })

  test('eachTree()', () => {
    let rest = []
    SupervueUtils.eachTree(null, item => {
      rest.push(item)
    })
    expect(rest).toEqual([])
    rest = []
    SupervueUtils.eachTree([{ a: 11 }, { a: 22 }], item => {
      rest.push(item)
    })
    expect(rest).toEqual([{ a: 11 }, { a: 22 }])
    rest = []
    SupervueUtils.eachTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], item => {
      rest.push(item)
    })
    expect(rest).toEqual([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
    rest = []
    SupervueUtils.eachTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
      rest.push(item)
    }, { children: 'childs' })
    expect(rest).toEqual([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
  })

  test('mapTree()', () => {
    expect(
      SupervueUtils.mapTree(null, item => {
        return item.a * 2
      })
    ).toEqual([])
    expect(
      SupervueUtils.mapTree([{ a: 11 }, { a: 22 }], item => {
        return item.a * 2
      })
    ).toEqual([22, 44])
    expect(
      SupervueUtils.mapTree([{ a: 11 }, { a: 22 }], item => {
        return { a: item.a * 2 }
      })
    ).toEqual([{ a: 22 }, { a: 44 }])
    expect(
      SupervueUtils.mapTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], item => {
        return { a: item.a * 2 }
      })
    ).toEqual([{ a: 22 }, { a: 44, children: [{ a: 444 }, { a: 446 }] }])
    expect(
      SupervueUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
        return { a: item.a * 2 }
      }, { children: 'childs' })
    ).toEqual([{ a: 22 }, { a: 44, childs: [{ a: 444 }, { a: 446 }] }])
    expect(
      SupervueUtils.mapTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
        return { a: item.a * 2 }
      }, { children: 'childs', mapChildren: 'childs2' })
    ).toEqual([{ a: 22 }, { a: 44, childs2: [{ a: 444 }, { a: 446 }] }])
  })

  test('filterTree()', () => {
    expect(
      SupervueUtils.filterTree(null, item => {
        return item.a === 33
      })
    ).toEqual([])
    expect(
      SupervueUtils.filterTree([{ a: 11 }, { a: 22 }], item => {
        return item.a === 33
      })
    ).toEqual([])
    expect(
      SupervueUtils.filterTree([{ a: 11 }, { a: 22 }], item => {
        return item.a === 11
      })
    ).toEqual([{ a: 11 }])
    expect(
      SupervueUtils.filterTree([{ a: 11 }, { a: 22, children: [{ a: 222 }, { a: 223 }] }], item => {
        return item.a >= 22
      })
    ).toEqual([{ a: 22, children: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
    expect(
      SupervueUtils.filterTree([{ a: 11 }, { a: 22, childs: [{ a: 222 }, { a: 223 }] }], item => {
        return item.a >= 22
      }, { children: 'childs' })
    ).toEqual([{ a: 22, childs: [{ a: 222 }, { a: 223 }] }, { a: 222 }, { a: 223 }])
  })

  test('searchTree()', () => {
    expect(
      SupervueUtils.searchTree(null, item => item.a === 33)
    ).toEqual([])
    expect(
      SupervueUtils.searchTree([{ a: 11 }, { a: 22 }], item => item.a === 33)
    ).toEqual([])
    expect(
      SupervueUtils.searchTree([{ a: 11 }, { a: 22 }], item => item.a === 11)
    ).toEqual([{ a: 11, children: [] }])
    expect(
      SupervueUtils.searchTree([{ id: 1 }, { id: 2, children: [{ id: 0 }] }, { id: 3, children: [{ id: 30 }] }], item => item.id > 1)
    ).toEqual([{ id: 2, children: [{ id: 0, children: [] }] }, { id: 3, children: [{ id: 30, children: [] }] }])
    expect(
      SupervueUtils.searchTree([{ id: 1 }, { id: 2, childs: [{ id: 0 }] }, { id: 3, childs: [{ id: 30 }] }], item => item.id >= 2, { children: 'childs' })
    ).toEqual([{ id: 2, childs: [{ id: 0, childs: [] }] }, { id: 3, childs: [{ id: 30, childs: [] }] }])
  })
})
