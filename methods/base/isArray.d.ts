import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否数组
 * @param val 值
 */
export declare function isArray(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否数组
     * @param val 值
     */
    isArray: typeof isArray;
  }
}

export default isArray
