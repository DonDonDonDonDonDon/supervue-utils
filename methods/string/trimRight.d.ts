import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 去除字符串右边的空格
 * @param str 字符串
 */
export declare function trimRight(str: string): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 去除字符串右边的空格
     * @param str 字符串
     */
    trimRight: typeof trimRight;
  }
}

export default trimRight
