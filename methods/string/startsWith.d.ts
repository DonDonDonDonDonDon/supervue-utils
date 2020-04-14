import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断字符串是否在源字符串的头部
 * @param str 字符串
 * @param val 值
 * @param startIndex 开始索引
 */
export declare function startsWith(str: string, val: string, startIndex?: number): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断字符串是否在源字符串的头部
     * @param str 字符串
     * @param val 值
     * @param startIndex 开始索引
     */
    startsWith: typeof startsWith;
  }
}

export default startsWith
