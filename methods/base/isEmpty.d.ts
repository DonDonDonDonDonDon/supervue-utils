import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否为空对象
 * @param val 值
 */
export declare function isEmpty(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否为空对象
     * @param val 值
     */
    isEmpty: typeof isEmpty;
  }
}

export default isEmpty
