import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 获取对象类型
 * @param obj 对象
 */
export declare function getType(obj: any): string;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 获取对象类型
     * @param obj 对象
     */
    getType: typeof getType;
  }
}

export default getType
