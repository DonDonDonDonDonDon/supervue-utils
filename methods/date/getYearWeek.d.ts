import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 返回某个年份的第几周
 * @param date 字符串/日期/时间戳
 */
export declare function getYearWeek(date: string | Date | number): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 返回某个年份的第几周
     * @param date 字符串/日期/时间戳
     */
    getYearWeek: typeof getYearWeek;
  }
}

export default getYearWeek
