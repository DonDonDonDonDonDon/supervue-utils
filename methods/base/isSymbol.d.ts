import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 Symbol 对象
 * @param val 值
 */
export declare function isSymbol(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 Symbol 对象
     * @param val 值
     */
    isSymbol: typeof isSymbol;
  }
}

export default isSymbol
