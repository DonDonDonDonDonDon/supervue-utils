import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 乘法运算
 * @param num1 数值1
 * @param num2 数值2
 */
export declare function multiply(num1: number, num2: number): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 乘法运算
     * @param num1 数值1
     * @param num2 数值2
     */
    multiply: typeof multiply;
  }
}

export default multiply
