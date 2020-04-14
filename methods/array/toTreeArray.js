import  setupDefaults from '../setupDefaults'

import  each from '../base/each'

import  assign from '../object/assign'

function unTreeList (result, array, opts) {
  var children
  var optChildren = opts.children
  var optData = opts.data
  each(array, function (item) {
    children = item[optChildren]
    if (optData) {
      item = item[optData]
    }
    result.push(item)
    if (children) {
      unTreeList(result, children, opts)
    }
  })
  return result
}

/**
  * 将一个树结构转成数组列表
  *
  * @param {Array} array 数组
  * @param {Object} options {children: 'children', data: 'data'}
  * @return {Array}
  */
function toTreeArray (array, options) {
  return unTreeList([], array, assign({}, setupDefaults.treeOptions, options))
}

export default toTreeArray
