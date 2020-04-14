import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 减法运算
 * @param num1 数值1
 * @param num2 数值2
 */
export declare function subtract(num1: number, num2: number): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 减法运算
     * @param num1 数值1
     * @param num2 数值2
     */
    subtract: typeof subtract;
  }
}

export default subtract
