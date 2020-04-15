import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 去除字符串左右两边的空格
 * @param str 字符串
 */
export declare function trim(str: string): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 去除字符串左右两边的空格
     * @param str 字符串
     */
    trim: typeof trim;
  }
}

export default trim
