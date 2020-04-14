import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 反转 escape
 * @param str 字符串
 */
export declare function unescape(str: string): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 反转 escape
     * @param str 字符串
     */
    unescape: typeof unescape;
  }
}

export default unescape
