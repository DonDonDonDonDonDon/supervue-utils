import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否方法
 * @param val 值
 */
export declare function isFunction(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否方法
     * @param val 值
     */
    isFunction: typeof isFunction;
  }
}

export default isFunction
