import { SupervueUtilsMethods } from '../supervue-utils'

/**
 * 返回当前时间戳
 */
export declare function now(): number;

declare module '../supervue-utils' {
  interface SupervueUtilsMethods {
    /**
     * 返回当前时间戳
     */
    now: typeof now;
  }
}

export default now
