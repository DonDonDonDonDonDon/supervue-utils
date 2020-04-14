import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 获取数组对象中某属性值，返回一个数组
 * @param array 数组
 * @param key 键
 * @example
 */
export declare function invoke(list: any[], path: string[] | string | Function): any[];

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 获取数组对象中某属性值，返回一个数组
     * @param array 数组
     * @param key 键
     * @example
     */
    invoke: typeof invoke;
  }
}

export default invoke
