import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 返回对象的长度
 * @param obj 对象
 */
export declare function getSize(obj: any): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 返回对象的长度
     * @param obj 对象
     */
    getSize: typeof getSize;
  }
}

export default getSize
