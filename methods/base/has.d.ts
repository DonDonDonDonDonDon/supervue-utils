import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 检查键、路径是否是该对象的属性
 * @param obj 对象
 * @param property 键、路径
 */
export declare function has(obj: any, property: string | string[]): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 检查键、路径是否是该对象的属性
     * @param obj 对象
     * @param property 键、路径
     */
    has: typeof has;
  }
}

export default has
