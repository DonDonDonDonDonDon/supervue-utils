import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 将对象或者伪数组转为新数组
 * @param array 对象/数组
 */
export declare function toArray(obj: any): any[];

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 将对象或者伪数组转为新数组
     * @param array 对象/数组
     */
    toArray: typeof toArray;
  }
}

export default toArray
