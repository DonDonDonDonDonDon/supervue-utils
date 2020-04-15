import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否是一个对象
 * @param val 值
 */
export declare function isPlainObject(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否是一个对象
     * @param val 值
     */
    isPlainObject: typeof isPlainObject;
  }
}

export default isPlainObject
