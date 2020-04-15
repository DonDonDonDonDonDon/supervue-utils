import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否闰年
 * @param date 日期
 */
export declare function isLeapYear(date?: Date | number | string): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否闰年
     * @param date 日期
     */
    isLeapYear: typeof isLeapYear;
  }
}

export default isLeapYear
