import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断数组是否包含另一数组
 * @param array1 数组
 * @param array2 数组
 */
export declare function includeArrays(array1: any[], array2: any[]): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断数组是否包含另一数组
     * @param array1 数组
     * @param array2 数组
     */
    includeArrays: typeof includeArrays;
  }
}

export default includeArrays
