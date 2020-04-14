import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 设置对象属性上的值。如果属性不存在则创建它
 * @param obj 对象
 * @param property 键、路径
 * @param value 值
 */
export declare function set(obj: any, property: string | string[], value: any): void;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 设置对象属性上的值。如果属性不存在则创建它
     * @param obj 对象
     * @param property 键、路径
     * @param value 值
     */
    set: typeof set;
  }
}

export default set
