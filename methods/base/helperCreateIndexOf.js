import  isArray from './isArray'
import  hasOwnProp from './hasOwnProp'

function helperCreateIndexOf (name, callback) {
  return function (obj, val) {
    if (obj) {
      if (typeof obj === 'string' || isArray(obj)) {
        if (obj[name]) {
          return obj[name](val)
        }
        return callback(obj, val)
      }
      for (var key in obj) {
        if (hasOwnProp(obj, key)) {
          if (val === obj[key]) {
            return key
          }
        }
      }
    }
    return -1
  }
}

export default helperCreateIndexOf
