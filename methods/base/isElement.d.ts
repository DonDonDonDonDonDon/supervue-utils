import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 Element 对象
 * @param val 值
 */
export declare function isElement(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 Element 对象
     * @param val 值
     */
    isElement: typeof isElement;
  }
}

export default isElement
