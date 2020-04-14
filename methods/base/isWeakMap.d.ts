import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 WeakMap 对象
 * @param val 值
 */
export declare function isWeakMap(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 WeakMap 对象
     * @param val 值
     */
    isWeakMap: typeof isWeakMap;
  }
}

export default isWeakMap
