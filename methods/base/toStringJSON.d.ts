import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 字符串转 JSON
 * @param str 字符串
 */
export declare function toStringJSON(str: string): any;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 字符串转 JSON
     * @param str 字符串
     */
    toStringJSON: typeof toStringJSON;
  }
}

export default toStringJSON
