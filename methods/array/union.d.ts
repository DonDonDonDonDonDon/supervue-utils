import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 将多个数的值返回唯一的并集数组
 * @param array 数组
 */
export declare function union(...array: any[]): any[];

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 将多个数的值返回唯一的并集数组
     * @param array 数组
     */
    union: typeof union;
  }
}

export default union
