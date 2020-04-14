import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断 Undefined
 * @param val 值
 */
export declare function isUndefined(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断 Undefined
     * @param val 值
     */
    isUndefined: typeof isUndefined;
  }
}

export default isUndefined
