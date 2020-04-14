import  staticLocation from '../static/staticLocation'

function helperGetLocatOrigin () {
  return staticLocation ? (staticLocation.origin || (staticLocation.protocol + '//' + staticLocation.host)) : ''
}

export default helperGetLocatOrigin
