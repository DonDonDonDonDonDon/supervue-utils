import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 转字符串
 * @param obj 值
 */
export declare function toString(obj: any): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 转字符串
     * @param obj 值
     */
    toString: typeof toString;
  }
}

export default toString
