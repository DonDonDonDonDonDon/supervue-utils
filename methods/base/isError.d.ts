import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 Error 对象
 * @param val 值
 */
export declare function isError(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 Error 对象
     * @param val 值
     */
    isError: typeof isError;
  }
}

export default isError
