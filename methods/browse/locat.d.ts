import { SupervueUtilsMethods } from '../supervue-utils'
import { XEUrl } from '..//url'

/**
 * 获取地址栏信息
 */
export declare function locat(): XEUrl;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 获取地址栏信息
     */
    locat: typeof locat;
  }
}

export default locat
