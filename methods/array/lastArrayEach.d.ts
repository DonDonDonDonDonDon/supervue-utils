import { SupervueUtilsMethods } from '../supervue-utils'

export declare function lastArrayEachIterate(item: any, index: number, list: any[]): any;

/**
 * 数组迭代器,从最后开始迭代
 * @param obj 对象
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function lastArrayEach(obj: any[], iteratee: typeof lastArrayEachIterate, context?: any): void;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 数组迭代器,从最后开始迭代
     * @param obj 对象
     * @param iteratee 回调
     * @param context 上下文
     */
    lastArrayEach: typeof lastArrayEach;
  }
}

export default lastArrayEach
