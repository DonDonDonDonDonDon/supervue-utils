import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 将每个数组中相应位置的值合并在一起
 * @param arrays 多个数组
 */
export declare function zip(...arrays: any[]): any[];

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 将每个数组中相应位置的值合并在一起
     * @param arrays 多个数组
     */
    zip: typeof zip;
  }
}

export default zip
