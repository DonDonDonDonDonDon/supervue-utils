import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 Set 对象
 * @param val 值
 */
export declare function isSet(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 Set 对象
     * @param val 值
     */
    isSet: typeof isSet;
  }
}

export default isSet
