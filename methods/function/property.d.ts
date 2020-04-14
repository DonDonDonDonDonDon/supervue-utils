import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 返回一个获取对象属性的函数
 * @param path 键值
 */
export declare function property(path: string): Function;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 返回一个获取对象属性的函数
     * @param path 键值
     */
    property: typeof property;
  }
}

export default property
