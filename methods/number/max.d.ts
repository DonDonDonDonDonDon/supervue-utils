import { SupervueUtilsMethods } from '../supervue-utils'

export declare function maxIterate(item: any, index: number, obj: any): any;

/**
 * 获取最大值
 * @param array 数组
 * @param iteratee 回调/属性
 */
export declare function max(array: Array<any>, iteratee: string | typeof maxIterate): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 获取最大值
     * @param array 数组
     * @param iteratee 回调/属性
     */
    max: typeof max;
  }
}

export default max
