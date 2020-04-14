import  staticLocation from '../static/staticLocation'

import  helperGetLocatOrigin from './helperGetLocatOrigin'

import  lastIndexOf from '../base/lastIndexOf'

function getBaseURL () {
  if (staticLocation) {
    var pathname = staticLocation.pathname
    var lastIndex = lastIndexOf(pathname, '/') + 1
    return helperGetLocatOrigin() + (lastIndex === pathname.length ? pathname : pathname.substring(0, lastIndex))
  }
  return ''
}

export default getBaseURL
