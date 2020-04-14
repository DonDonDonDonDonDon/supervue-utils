import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断字符串是否在源字符串的头部
 * @param query 序列化的对象
 */
export declare function serialize(query: any): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断字符串是否在源字符串的头部
     * @param query 序列化的对象
     */
    serialize: typeof serialize;
  }
}

export default serialize
