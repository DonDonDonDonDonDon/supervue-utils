import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 获取对象最后一个值
 * @param obj 对象
 */
export declare function last(obj: any): any;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 获取对象最后一个值
     * @param obj 对象
     */
    last: typeof last;
  }
}

export default last
