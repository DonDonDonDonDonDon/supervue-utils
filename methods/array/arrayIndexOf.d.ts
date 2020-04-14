import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 返回数组第一个索引值
 * @param obj 数组
 * @param val 值
 */
export declare function arrayIndexOf(obj: any, val: any): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 返回数组第一个索引值
     * @param obj 数组
     * @param val 值
     */
    arrayIndexOf: typeof arrayIndexOf;
  }
}

export default arrayIndexOf
