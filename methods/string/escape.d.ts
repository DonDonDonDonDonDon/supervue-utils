import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 转义HTML字符串，替换&, <, >, ", ', \`字符
 * @param str 字符串
 */
export declare function escape(str: string): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 转义HTML字符串，替换&, <, >, ", ', \`字符
     * @param str 字符串
     */
    escape: typeof escape;
  }
}

export default escape
