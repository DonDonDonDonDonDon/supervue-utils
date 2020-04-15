import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 获取一个全局唯一标识
 * @param prefix 自定义前缀
 */
export declare function uniqueId(prefix?: string): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 获取一个全局唯一标识
     * @param prefix 自定义前缀
     */
    uniqueId: typeof uniqueId;
  }
}

export default uniqueId
