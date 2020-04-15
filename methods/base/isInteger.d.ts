import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否整数
 * @param val 值
 */
export declare function isInteger(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否整数
     * @param val 值
     */
    isInteger: typeof isInteger;
  }
}

export default isInteger
