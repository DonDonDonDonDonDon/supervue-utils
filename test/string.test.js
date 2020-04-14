const SupervueUtils = require('../index')

describe('String functions', () => {
  test('toString()', () => {
    expect(
      SupervueUtils.toString()
    ).toEqual('')
    expect(
      SupervueUtils.toString(null)
    ).toEqual('')
    expect(
      SupervueUtils.toString(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.toString(0)
    ).toEqual('0')
    expect(
      SupervueUtils.toString(-1)
    ).toEqual('-1')
    expect(
      SupervueUtils.toString(123)
    ).toEqual('123')
    expect(
      SupervueUtils.toString([])
    ).toEqual('')
    expect(
      SupervueUtils.toString(/\w/)
    ).toEqual('/\\w/')
    expect(
      SupervueUtils.toString({})
    ).toEqual('[object Object]')
    expect(
      SupervueUtils.toString(function () {})
    ).toEqual('function () {}')
    expect(
      SupervueUtils.toString(['3e-9'])
    ).toEqual('3e-9')
    expect(
      SupervueUtils.toString(3e-9)
    ).toEqual('0.000000003')
    expect(
      SupervueUtils.toString(0.000003)
    ).toEqual('0.000003')
    expect(
      SupervueUtils.toString([123])
    ).toEqual('123')
    expect(
      SupervueUtils.toString([123.0000006])
    ).toEqual('123.0000006')
  })

  test('trim()', () => {
    expect(
      SupervueUtils.trim()
    ).toEqual('')
    expect(
      SupervueUtils.trim(null)
    ).toEqual('')
    expect(
      SupervueUtils.trim(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.trim(0)
    ).toEqual('0')
    expect(
      SupervueUtils.trim(123456)
    ).toEqual('123456')
    expect(
      SupervueUtils.trim(-1)
    ).toEqual('-1')
    expect(
      SupervueUtils.trim([])
    ).toEqual('')
    expect(
      SupervueUtils.trim('0')
    ).toEqual('0')
    expect(
      SupervueUtils.trim(' abc ')
    ).toEqual('abc')
  })

  test('trimLeft()', () => {
    expect(
      SupervueUtils.trimLeft()
    ).toEqual('')
    expect(
      SupervueUtils.trimLeft(null)
    ).toEqual('')
    expect(
      SupervueUtils.trimLeft(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.trimLeft(0)
    ).toEqual('0')
    expect(
      SupervueUtils.trimLeft(123456)
    ).toEqual('123456')
    expect(
      SupervueUtils.trimLeft(-1)
    ).toEqual('-1')
    expect(
      SupervueUtils.trimLeft([])
    ).toEqual('')
    expect(
      SupervueUtils.trimLeft('0')
    ).toEqual('0')
    expect(
      SupervueUtils.trimLeft(' abc ')
    ).toEqual('abc ')
  })

  test('trimRight()', () => {
    expect(
      SupervueUtils.trimRight()
    ).toEqual('')
    expect(
      SupervueUtils.trimRight(null)
    ).toEqual('')
    expect(
      SupervueUtils.trimRight(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.trimRight(0)
    ).toEqual('0')
    expect(
      SupervueUtils.trimRight(123456)
    ).toEqual('123456')
    expect(
      SupervueUtils.trimRight(-1)
    ).toEqual('-1')
    expect(
      SupervueUtils.trimRight([])
    ).toEqual('')
    expect(
      SupervueUtils.trimRight('0')
    ).toEqual('0')
    expect(
      SupervueUtils.trimRight(' abc ')
    ).toEqual(' abc')
  })

  test('escape()', () => {
    expect(
      SupervueUtils.escape()
    ).toEqual('')
    expect(
      SupervueUtils.escape(null)
    ).toEqual('')
    expect(
      SupervueUtils.escape(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.escape(0)
    ).toEqual('0')
    expect(
      SupervueUtils.escape(123456)
    ).toEqual('123456')
    expect(
      SupervueUtils.escape(-1)
    ).toEqual('-1')
    expect(
      SupervueUtils.escape([])
    ).toEqual('')
    expect(
      SupervueUtils.escape('<a>link</a>')
    ).toEqual('&lt;a&gt;link&lt;/a&gt;')
    expect(
      SupervueUtils.escape('<script>alert()</script>')
    ).toEqual('&lt;script&gt;alert()&lt;/script&gt;')
  })

  test('unescape()', () => {
    expect(
      SupervueUtils.unescape()
    ).toEqual('')
    expect(
      SupervueUtils.unescape(null)
    ).toEqual('')
    expect(
      SupervueUtils.unescape(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.unescape(0)
    ).toEqual('0')
    expect(
      SupervueUtils.unescape(123456)
    ).toEqual('123456')
    expect(
      SupervueUtils.unescape(-1)
    ).toEqual('-1')
    expect(
      SupervueUtils.unescape([])
    ).toEqual('')
    expect(
      SupervueUtils.unescape('&lt;a&gt;link&lt;/a&gt;')
    ).toEqual('<a>link</a>')
    expect(
      SupervueUtils.unescape('&lt;script&gt;alert()&lt;/script&gt;')
    ).toEqual('<script>alert()</script>')
  })

  test('camelCase()', () => {
    expect(
      SupervueUtils.camelCase()
    ).toEqual('')
    expect(
      SupervueUtils.camelCase(null)
    ).toEqual('')
    expect(
      SupervueUtils.camelCase(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.camelCase(0)
    ).toEqual('0')
    expect(
      SupervueUtils.camelCase(123456)
    ).toEqual('123456')
    expect(
      SupervueUtils.camelCase(-1)
    ).toEqual('-1')
    expect(
      SupervueUtils.camelCase([])
    ).toEqual('')
    expect(
      SupervueUtils.camelCase('project-name')
    ).toEqual('projectName')
  })

  test('kebabCase()', () => {
    expect(
      SupervueUtils.kebabCase()
    ).toEqual('')
    expect(
      SupervueUtils.kebabCase(null)
    ).toEqual('')
    expect(
      SupervueUtils.kebabCase(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.kebabCase(0)
    ).toEqual('0')
    expect(
      SupervueUtils.kebabCase(123456)
    ).toEqual('123456')
    expect(
      SupervueUtils.kebabCase(-1)
    ).toEqual('-1')
    expect(
      SupervueUtils.kebabCase([])
    ).toEqual('')
    expect(
      SupervueUtils.kebabCase('projectName')
    ).toEqual('project-name')
  })

  test('repeat()', () => {
    expect(
      SupervueUtils.repeat()
    ).toEqual('')
    expect(
      SupervueUtils.repeat(null)
    ).toEqual('')
    expect(
      SupervueUtils.repeat(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.repeat(0)
    ).toEqual('')
    expect(
      SupervueUtils.repeat([])
    ).toEqual('')
    expect(
      SupervueUtils.repeat('aaaaa')
    ).toEqual('')
    expect(
      SupervueUtils.repeat('aaaaa', 0)
    ).toEqual('')
    expect(
      SupervueUtils.repeat('aaaaa', null)
    ).toEqual('')
    expect(
      SupervueUtils.repeat('aaaaa', undefined)
    ).toEqual('')
    expect(
      SupervueUtils.repeat('a', 5)
    ).toEqual('aaaaa')
    expect(
      SupervueUtils.repeat('ab', 3)
    ).toEqual('ababab')
  })

  test('padStart()', () => {
    expect(
      SupervueUtils.padStart()
    ).toEqual('')
    expect(
      SupervueUtils.padStart(null)
    ).toEqual('')
    expect(
      SupervueUtils.padStart(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.padStart(0)
    ).toEqual('0')
    expect(
      SupervueUtils.padStart([])
    ).toEqual('')
    expect(
      SupervueUtils.padStart(null, 2)
    ).toEqual('  ')
    expect(
      SupervueUtils.padStart(null, 6)
    ).toEqual('      ')
    expect(
      SupervueUtils.padStart(0, 2)
    ).toEqual(' 0')
    expect(
      SupervueUtils.padStart('', 2)
    ).toEqual('  ')
    expect(
      SupervueUtils.padStart('a', 4)
    ).toEqual('   a')
    expect(
      SupervueUtils.padStart('a', 6, undefined)
    ).toEqual('     a')
    expect(
      SupervueUtils.padStart('a', 6, null)
    ).toEqual('nullna')
    expect(
      SupervueUtils.padStart('a', 6, false)
    ).toEqual('falsea')
    expect(
      SupervueUtils.padStart('a', 5, 'b')
    ).toEqual('bbbba')
    expect(
      SupervueUtils.padStart('2', 5, 0)
    ).toEqual('00002')
    expect(
      SupervueUtils.padStart('2', 5, '0')
    ).toEqual('00002')
  })

  test('padEnd()', () => {
    expect(
      SupervueUtils.padEnd()
    ).toEqual('')
    expect(
      SupervueUtils.padEnd(null)
    ).toEqual('')
    expect(
      SupervueUtils.padEnd(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.padEnd(0)
    ).toEqual('0')
    expect(
      SupervueUtils.padEnd([])
    ).toEqual('')
    expect(
      SupervueUtils.padEnd(null, 2)
    ).toEqual('  ')
    expect(
      SupervueUtils.padEnd(null, 6)
    ).toEqual('      ')
    expect(
      SupervueUtils.padEnd(0, 2)
    ).toEqual('0 ')
    expect(
      SupervueUtils.padEnd('', 2)
    ).toEqual('  ')
    expect(
      SupervueUtils.padEnd('a', 4)
    ).toEqual('a   ')
    expect(
      SupervueUtils.padEnd('a', 6, undefined)
    ).toEqual('a     ')
    expect(
      SupervueUtils.padEnd('a', 6, null)
    ).toEqual('anulln')
    expect(
      SupervueUtils.padEnd('a', 6, false)
    ).toEqual('afalse')
    expect(
      SupervueUtils.padEnd('a', 5, 'b')
    ).toEqual('abbbb')
    expect(
      SupervueUtils.padEnd('2', 5, 0)
    ).toEqual('20000')
    expect(
      SupervueUtils.padEnd('2', 5, '0')
    ).toEqual('20000')
  })

  test('startsWith()', () => {
    expect(
      SupervueUtils.startsWith()
    ).toEqual(false)
    expect(
      SupervueUtils.startsWith(0)
    ).toEqual(false)
    expect(
      SupervueUtils.startsWith(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.startsWith(null)
    ).toEqual(false)
    expect(
      SupervueUtils.startsWith(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.startsWith('')
    ).toEqual(false)
    expect(
      SupervueUtils.startsWith('abc')
    ).toEqual(false)
    expect(
      SupervueUtils.startsWith('abc', null)
    ).toEqual(false)
    expect(
      SupervueUtils.startsWith('abc', -1)
    ).toEqual(false)
    expect(
      SupervueUtils.startsWith('abc', 'b')
    ).toEqual(false)
    expect(
      SupervueUtils.startsWith('abc', 'b', 2)
    ).toEqual(false)
    expect(
      SupervueUtils.startsWith('abc', 'a')
    ).toEqual(true)
    expect(
      SupervueUtils.startsWith('abc', 'b', 1)
    ).toEqual(true)
  })

  test('endsWith()', () => {
    expect(
      SupervueUtils.endsWith()
    ).toEqual(false)
    expect(
      SupervueUtils.endsWith(0)
    ).toEqual(false)
    expect(
      SupervueUtils.endsWith(-1)
    ).toEqual(false)
    expect(
      SupervueUtils.endsWith(null)
    ).toEqual(false)
    expect(
      SupervueUtils.endsWith(undefined)
    ).toEqual(false)
    expect(
      SupervueUtils.endsWith('')
    ).toEqual(false)
    expect(
      SupervueUtils.endsWith('abc')
    ).toEqual(false)
    expect(
      SupervueUtils.endsWith('abc', null)
    ).toEqual(false)
    expect(
      SupervueUtils.endsWith('abc', -1)
    ).toEqual(false)
    expect(
      SupervueUtils.endsWith('abc', 'a')
    ).toEqual(false)
    expect(
      SupervueUtils.endsWith('abc', 'c', 2)
    ).toEqual(false)
    expect(
      SupervueUtils.endsWith('abc', 'c')
    ).toEqual(true)
    expect(
      SupervueUtils.endsWith('abc', 'b', 2)
    ).toEqual(true)
  })

  test('template()', () => {
    expect(
      SupervueUtils.template()
    ).toEqual('')
    expect(
      SupervueUtils.template(null)
    ).toEqual('')
    expect(
      SupervueUtils.template(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.template(0)
    ).toEqual('0')
    expect(
      SupervueUtils.template(-1)
    ).toEqual('-1')
    expect(
      SupervueUtils.template(123)
    ).toEqual('123')
    expect(
      SupervueUtils.template(/\d/)
    ).toEqual('/\\d/')
    expect(
      SupervueUtils.template({})
    ).toEqual('[object Object]')
    expect(
      SupervueUtils.template(function () {})
    ).toEqual('function () {}')
    expect(
      SupervueUtils.template([])
    ).toEqual('')
    expect(
      SupervueUtils.template('0')
    ).toEqual('0')
    expect(
      SupervueUtils.template('[0]')
    ).toEqual('[0]')
    expect(
      SupervueUtils.template('{{0}}')
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('name')
    ).toEqual('name')
    expect(
      SupervueUtils.template('{name')
    ).toEqual('{name')
    expect(
      SupervueUtils.template('name}name}')
    ).toEqual('name}name}')
    expect(
      SupervueUtils.template('{name}{name}')
    ).toEqual('{name}{name}')
    expect(
      SupervueUtils.template('{{name}}')
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('{{name}}', null)
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('{{name}}', undefined)
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('{{name}}', '')
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('{{name}}', -1)
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('{{name}}', 0)
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('{{name}}', [])
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('{{name}}', {})
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('{{0}}', [null])
    ).toEqual('null')
    expect(
      SupervueUtils.template('{{{0}}}', [null])
    ).toEqual('{null}')
    expect(
      SupervueUtils.template('{{  }}', { name: 'test1' })
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('{{ }}')
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('{{0}}', { name: 'test1' })
    ).toEqual('undefined')
    expect(
      SupervueUtils.template('{{name}}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      SupervueUtils.template('{{}}', { name: 'test1' })
    ).toEqual('{{}}')
    expect(
      SupervueUtils.template('{{{{name}}}}', { name: 'test1' })
    ).toEqual('{{test1}}')
    expect(
      SupervueUtils.template('{{name }}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      SupervueUtils.template('{{ name}}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      SupervueUtils.template('{{ name }}', { name: 'test1' })
    ).toEqual('test1')
    expect(
      SupervueUtils.template('{{ name }}{{{ name }}}{{ name }}', { name: 'test1' })
    ).toEqual('test1{test1}test1')
    expect(
      SupervueUtils.template('{{ 0 }}{{{ 2 }}}{{ 3 }}', [null, 11, 22, 33, 44])
    ).toEqual('null{22}33')
    expect(
      SupervueUtils.template('{{name}}-{{age}}', { name: 'test1', age: 26 })
    ).toEqual('test1-26')
    expect(
      SupervueUtils.template('{{name}}-{{age}}', [])
    ).toEqual('undefined-undefined')
    expect(
      SupervueUtils.template('{{0}}-{{1}}', [])
    ).toEqual('undefined-undefined')
    expect(
      SupervueUtils.template('{{0}}-{{1}}', [11, '22'])
    ).toEqual('11-22')
    expect(
      SupervueUtils.template('{{name}} to {{{age}}}12{3} {{{{sex}}}}', { name: 'test1', age: 26, sex: '男' })
    ).toEqual('test1 to {26}12{3} {{男}}')
  })
})
