import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 RegExp 对象
 * @param val 值
 */
export declare function isRegExp(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 RegExp 对象
     * @param val 值
     */
    isRegExp: typeof isRegExp;
  }
}

export default isRegExp
