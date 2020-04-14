import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 Boolean 对象
 * @param val 值
 */
export declare function isBoolean(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 Boolean 对象
     * @param val 值
     */
    isBoolean: typeof isBoolean;
  }
}

export default isBoolean
