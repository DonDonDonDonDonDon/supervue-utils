import { SupervueUtilsMethods } from '../supervue-utils'

export declare function removeIterate(item: any, index: any, obj: any): any;

/**
 * 移除对象属性
 * @param obj 对象
 * @param iteratee 迭代器/值
 */
export declare function remove(obj: any, iteratee: number | string | typeof removeIterate): any;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 移除对象属性
     * @param obj 对象
     * @param iteratee 迭代器/值
     */
    remove: typeof remove;
  }
}

export default remove
