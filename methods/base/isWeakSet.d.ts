import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 WeakSet 对象
 * @param val 值
 */
export declare function isWeakSet(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 WeakSet 对象
     * @param val 值
     */
    isWeakSet: typeof isWeakSet;
  }
}

export default isWeakSet
