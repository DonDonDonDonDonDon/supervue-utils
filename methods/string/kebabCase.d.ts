import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 将字符串转成驼峰字符串
 * @param str 字符串
 */
export declare function kebabCase(str: string): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 将字符串转成驼峰字符串
     * @param str 字符串
     */
    kebabCase: typeof kebabCase;
  }
}

export default kebabCase
