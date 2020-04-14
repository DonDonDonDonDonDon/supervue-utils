import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否非数值
 * @param val 值
 */
export declare function isNaN(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否非数值
     * @param val 值
     */
    isNaN: typeof isNaN;
  }
}

export default isNaN
