import { SupervueUtilsMethods } from '../supervue-utils'

export declare function minIterate(item: any, index: number, obj: any): any;

/**
 * 获取最小值
 * @param array 数组
 * @param iteratee 回调/属性
 */
export declare function min(array: Array<any>, iteratee: string | typeof minIterate): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 获取最小值
     * @param array 数组
     * @param iteratee 回调/属性
     */
    min: typeof min;
  }
}

export default min
