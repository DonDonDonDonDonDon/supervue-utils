import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 除法运算
 * @param num1 数值1
 * @param num2 数值2
 */
export declare function divide(num1: number, num2: number): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 除法运算
     * @param num1 数值1
     * @param num2 数值2
     */
    divide: typeof divide;
  }
}

export default divide
