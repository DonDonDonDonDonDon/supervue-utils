import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 转整数
 * @param num 数值/字符串
 */
export declare function toInteger(num: string | number): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 转整数
     * @param num 数值/字符串
     */
    toInteger: typeof toInteger;
  }
}

export default toInteger
