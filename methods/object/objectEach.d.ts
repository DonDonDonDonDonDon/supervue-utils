import { SupervueUtilsMethods } from '../supervue-utils'

export declare function objectEachIterate(item: any, key: string, obj: any): any;

/**
 * 对象迭代器
 * @param obj 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function objectEach(obj: any, iteratee: typeof objectEachIterate, context ?: any): void;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 对象迭代器
     * @param obj 对象
     * @param iteratee 回调
     * @param context 上下文
     */
    objectEach: typeof objectEach;
  }
}

export default objectEach
