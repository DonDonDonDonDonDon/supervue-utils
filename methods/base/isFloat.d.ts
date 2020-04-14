import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否小数
 * @param val 值
 */
export declare function isFloat(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否小数
     * @param val 值
     */
    isFloat: typeof isFloat;
  }
}

export default isFloat
