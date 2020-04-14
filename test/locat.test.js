const SupervueUtils = require('../index')

describe('location functions', () => {
  test('serialize()', () => {
    expect(
      SupervueUtils.serialize()
    ).toEqual('')
    expect(
      SupervueUtils.serialize(null)
    ).toEqual('')
    expect(
      SupervueUtils.serialize(undefined)
    ).toEqual('')
    expect(
      SupervueUtils.serialize({})
    ).toEqual('')
    expect(
      SupervueUtils.serialize([])
    ).toEqual('')
    expect(
      SupervueUtils.serialize(-1)
    ).toEqual('')
    expect(
      SupervueUtils.serialize({ id: 123, name: 'test1' })
    ).toEqual('id=123&name=test1')
    expect(
      SupervueUtils.serialize({ id: 123, name: -1 })
    ).toEqual('id=123&name=-1')
    expect(
      SupervueUtils.serialize({ id: 123, name: 0 })
    ).toEqual('id=123&name=0')
    expect(
      SupervueUtils.serialize({ id: 123, name: false })
    ).toEqual('id=123&name=false')
    expect(
      SupervueUtils.serialize({ id: 123, name: null })
    ).toEqual('id=123&name=')
    expect(
      SupervueUtils.serialize({ id: 123, name: undefined })
    ).toEqual('id=123')
    expect(
      SupervueUtils.serialize({ list: [11, 22] })
    ).toEqual('list%5B%5D=11&list%5B%5D=22')
    expect(
      SupervueUtils.serialize({ list: [{ id: 11, name: 't1' }, { id: 44, name: 't2' }] })
    ).toEqual('list%5B0%5D%5Bid%5D=11&list%5B0%5D%5Bname%5D=t1&list%5B1%5D%5Bid%5D=44&list%5B1%5D%5Bname%5D=t2')
  })

  test('unserialize()', () => {
    expect(
      SupervueUtils.unserialize()
    ).toEqual({})
    expect(
      SupervueUtils.unserialize({})
    ).toEqual({})
    expect(
      SupervueUtils.unserialize([])
    ).toEqual({})
    expect(
      SupervueUtils.unserialize(null)
    ).toEqual({})
    expect(
      SupervueUtils.unserialize(undefined)
    ).toEqual({})
    expect(
      SupervueUtils.unserialize(0)
    ).toEqual({})
    expect(
      SupervueUtils.unserialize(-1)
    ).toEqual({})
    expect(
      SupervueUtils.unserialize('id=123&name=test1')
    ).toEqual({ id: '123', name: 'test1' })
    expect(
      SupervueUtils.unserialize('id=123&name=false')
    ).toEqual({ id: '123', name: 'false' })
    expect(
      SupervueUtils.unserialize('id=123&name=0')
    ).toEqual({ id: '123', name: '0' })
    expect(
      SupervueUtils.unserialize('id=123&name=null')
    ).toEqual({ id: '123', name: 'null' })
    expect(
      SupervueUtils.unserialize('id=123&name=')
    ).toEqual({ id: '123', name: '' })
  })

  test('parseUrl()', () => {
    expect(
      SupervueUtils.parseUrl('http://baidu.com')
    ).toEqual({
      hash: '',
      hashKey: '',
      hashQuery: {},
      host: 'baidu.com',
      hostname: 'baidu.com',
      href: 'http://baidu.com',
      origin: 'http://baidu.com',
      path: '/',
      pathname: '/',
      port: '',
      protocol: 'http:',
      search: '',
      searchQuery: {}
    })
    expect(
      SupervueUtils.parseUrl('http://127.0.0.1/demo')
    ).toEqual({
      hash: '',
      hashKey: '',
      hashQuery: {},
      host: '127.0.0.1',
      hostname: '127.0.0.1',
      href: 'http://127.0.0.1/demo',
      origin: 'http://127.0.0.1',
      path: '/demo',
      pathname: '/demo',
      port: '',
      protocol: 'http:',
      search: '',
      searchQuery: {}
    })
    expect(
      SupervueUtils.parseUrl('http://localhost:8080/demo?id=123')
    ).toEqual({
      hash: '',
      hashKey: '',
      hashQuery: {},
      host: 'localhost:8080',
      hostname: 'localhost',
      href: 'http://localhost:8080/demo?id=123',
      origin: 'http://localhost:8080',
      path: '/demo?id=123',
      pathname: '/demo',
      port: '8080',
      protocol: 'http:',
      search: '?id=123',
      searchQuery: {
        id: '123'
      }
    })
    expect(
      SupervueUtils.parseUrl('http://localhost:8080/demo/#/home?id=123')
    ).toEqual({
      hash: '#/home?id=123',
      hashKey: '/home',
      hashQuery: {
        id: '123'
      },
      host: 'localhost:8080',
      hostname: 'localhost',
      href: 'http://localhost:8080/demo/#/home?id=123',
      origin: 'http://localhost:8080',
      path: '/demo/',
      pathname: '/demo/',
      port: '8080',
      protocol: 'http:',
      search: '',
      searchQuery: {}
    })
    expect(
      SupervueUtils.parseUrl('http://www.baidu.com:8080/demo/?v=1#/home?id=123')
    ).toEqual({
      hash: '#/home?id=123',
      hashKey: '/home',
      hashQuery: {
        id: '123'
      },
      host: 'www.baidu.com:8080',
      hostname: 'www.baidu.com',
      href: 'http://www.baidu.com:8080/demo/?v=1#/home?id=123',
      origin: 'http://www.baidu.com:8080',
      path: '/demo/?v=1',
      pathname: '/demo/',
      port: '8080',
      protocol: 'http:',
      search: '?v=1',
      searchQuery: {
        v: '1'
      }
    })
  })
})
