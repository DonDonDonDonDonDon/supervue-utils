import  map from './map'

/**
 * 将对象或者伪数组转为新数组
 *
 * @param {Array} obj 数组
 * @return {Array}
 */
function toArray (array) {
  return map(array, function (item) {
    return item
  })
}

export default toArray
