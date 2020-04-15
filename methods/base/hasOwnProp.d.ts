import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断对象自身属性中是否具有指定的属性
 * @param obj 对象
 * @param key 键值
 */
export declare function hasOwnProp(obj: any, key: string | number): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断对象自身属性中是否具有指定的属性
     * @param obj 对象
     * @param key 键值
     */
    hasOwnProp: typeof hasOwnProp;
  }
}

export default hasOwnProp
