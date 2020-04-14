import { SupervueUtilsMethods } from '../supervue-utils'

export declare function forOfIterate(item: any, index: any, obj: any): any;

/**
 * 迭代器,支持 return false 跳出循环 break
 * @param obj 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function forOf(obj: any, iteratee: typeof forOfIterate, context?: any): void;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 迭代器,支持 return false 跳出循环 break
     * @param obj 对象
     * @param iteratee 回调
     * @param context 上下文
     */
    forOf: typeof forOf;
  }
}

export default forOf
