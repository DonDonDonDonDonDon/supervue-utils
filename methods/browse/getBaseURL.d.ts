import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 获取上下文路径
 */
export declare function getBaseURL(): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 获取上下文路径
     */
    getBaseURL: typeof getBaseURL;
  }
}

export default getBaseURL
