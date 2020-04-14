import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 从最后开始的索引值,返回数组第一个索引值
 * @param obj 数组
 * @param val 值
 */
export declare function arrayLastIndexOf(obj: any, val: any): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 从最后开始的索引值,返回数组第一个索引值
     * @param obj 数组
     * @param val 值
     */
    arrayLastIndexOf: typeof arrayLastIndexOf;
  }
}

export default arrayLastIndexOf
