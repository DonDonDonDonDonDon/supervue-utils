import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 将一个多维数组铺平
 * @param array 数组
 * @param deep 是否深层
 */
export declare function flatten(array: any[], deep?: boolean): any[];

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 将一个多维数组铺平
     * @param array 数组
     * @param deep 是否深层
     */
    flatten: typeof flatten;
  }
}

export default flatten
