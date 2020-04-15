import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 返回某个月份的第几周
 * @param date 字符串/日期/时间戳
 */
export declare function getMonthWeek(date: string | Date | number): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 返回某个月份的第几周
     * @param date 字符串/日期/时间戳
     */
    getMonthWeek: typeof getMonthWeek;
  }
}

export default getMonthWeek
