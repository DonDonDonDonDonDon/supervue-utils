import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 判断是否 FormData 对象
 * @param val 值
 */
export declare function isFormData(val: any): boolean;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 判断是否 FormData 对象
     * @param val 值
     */
    isFormData: typeof isFormData;
  }
}

export default isFormData
