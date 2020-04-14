import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 Window 对象
 * @param val 值
 */
export declare function isWindow(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 Window 对象
     * @param val 值
     */
    isWindow: typeof isWindow;
  }
}

export default isWindow
