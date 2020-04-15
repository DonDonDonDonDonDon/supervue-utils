import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 Number 对象
 * @param val 值
 */
export declare function isNumber(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 Number 对象
     * @param val 值
     */
    isNumber: typeof isNumber;
  }
}

export default isNumber
