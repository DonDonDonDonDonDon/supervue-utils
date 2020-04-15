
import setupDefaults from './setupDefaults'

export interface SupervueUtilsMethods {
  /**
   * 版本信息
   */
  v: string;
  /**
   * 设置全局参数
   * @param options 全局参数
   */
  setup(options: setupDefaults): setupDefaults;

  /**
   * 将您自己的实用函数扩展到 SupervueUtils
   * @param methods 函数集
   */
  mixin(...methods: any[]): void;

  [propertys: string]: any;
}

/**
 * JavaScript 函数库、工具类
 */
export declare var SupervueUtils: SupervueUtilsMethods

export default SupervueUtils
