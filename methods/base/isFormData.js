/* eslint-disable valid-typeof */
import  staticStrUndefined from '../static/staticStrUndefined'

/**
  * 判断是否FormData对象
  *
  * @param {Object} obj 对象
  * @return {Boolean}
  */
var supportFormData = typeof FormData !== staticStrUndefined
function isFormData (obj) {
  return supportFormData && obj instanceof FormData
}

export default isFormData
