import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 undefined 和 null
 * @param obj 对象
 */
export declare function eqNull(obj: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 undefined 和 null
     * @param obj 对象
     */
    eqNull: typeof eqNull;
  }
}

export default eqNull
