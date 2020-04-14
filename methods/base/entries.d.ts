import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 获取对象所有属性、值
 * @param obj 对象
 */
export declare function entries(obj: any): any[];

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 获取对象所有属性、值
     * @param obj 对象
     */
    entries: typeof entries;
  }
}

export default entries
