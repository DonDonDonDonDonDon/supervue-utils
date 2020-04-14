import { SupervueUtilsMethods } from '../supervue-utils'

export interface toTreeArrayOptions {
  children?: string;
  data?: string;
}

/**
 * 将一个树结构转成数组列表
 * @param {Array} array 数组
 * @param {Object} options {children: 'children', data: 'data'}
 */
export declare function toTreeArray(array: any[], options?: toTreeArrayOptions): any[];

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 将一个树结构转成数组列表
     * @param {Array} array 数组
     * @param {Object} options {children: 'children', data: 'data'}
     */
    toTreeArray: typeof toTreeArray;
  }
}

export default toTreeArray
