import  staticLocation from '../static/staticLocation'

import  parseUrl from '../url/parseUrl'

/**
  * 获取地址栏信息
  *
  * @return Object
  */
function locat () {
  return staticLocation ? parseUrl(staticLocation.href) : {}
}

export default locat
