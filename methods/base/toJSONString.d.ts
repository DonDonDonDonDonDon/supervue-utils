import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * JSON 转字符串
 * @param obj 对象
 */
export declare function toJSONString(obj: any): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * JSON 转字符串
     * @param obj 对象
     */
    toJSONString: typeof toJSONString;
  }
}

export default toJSONString
