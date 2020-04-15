import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 转数值
 * @param num 数值/字符串
 */
export declare function toNumber(num: string | number): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 转数值
     * @param num 数值/字符串
     */
    toNumber: typeof toNumber;
  }
}

export default toNumber
