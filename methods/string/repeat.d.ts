import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 将字符串重复 n 次
 * @param str 字符串
 * @param count 次数
 */
export declare function repeat(str: string, count: number): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 将字符串重复 n 次
     * @param str 字符串
     * @param count 次数
     */
    repeat: typeof repeat;
  }
}

export default repeat
