import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 数组去重
 * @param array 数组
 */
export declare function uniq(array: any[]): any[];

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 数组去重
     * @param array 数组
     */
    uniq: typeof uniq;
  }
}

export default uniq
