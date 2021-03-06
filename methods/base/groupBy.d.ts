import { SupervueUtilsMethods } from '../supervue-utils'

export declare function groupByIterate(item: any, index: any, obj: any): any;

/**
 * 集合分组,默认使用键值分组,如果有 iteratee 则使用结果进行分组
 * @param obj 对象
 * @param iteratee 回调/对象属性
 * @param context 上下文
 */
export declare function groupBy(obj: any, iteratee: string | typeof groupByIterate, context?: any): any;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 集合分组,默认使用键值分组,如果有 iteratee 则使用结果进行分组
     * @param obj 对象
     * @param iteratee 回调/对象属性
     * @param context 上下文
     */
    groupBy: typeof groupBy;
  }
}

export default groupBy
