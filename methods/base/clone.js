import  isArray from './isArray'
import  isPlainObject from './isPlainObject'

import  objectMap from '../object/objectMap'

import  map from '../array/map'

function startClone (func, obj, deep) {
  return func(obj, deep ? function (val) {
    return deepClone(val, deep)
  } : function (val) {
    return val
  })
}

function deepClone (val, deep) {
  return isPlainObject(val) ? startClone(objectMap, val, deep) : isArray(val) ? startClone(map, val, deep) : val
}

/**
  * 浅拷贝/深拷贝
  *
  * @param {Object} obj 对象/数组
  * @param {Boolean} deep 是否深拷贝
  * @return {Object}
  */
function clone (obj, deep) {
  if (obj) {
    return deepClone(obj, deep)
  }
  return obj
}

export default clone

