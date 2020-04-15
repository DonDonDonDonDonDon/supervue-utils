import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 Arguments 对象
 * @param val 值
 */
export declare function isArguments(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 Arguments 对象
     * @param val 值
     */
    isArguments: typeof isArguments;
  }
}

export default isArguments
