import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否为有限数值
 * @param val 值
 */
export declare function isFinite(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否为有限数值
     * @param val 值
     */
    isFinite: typeof isFinite;
  }
}

export default isFinite
