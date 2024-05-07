/** 此文件用于扩展axios模块的类型定义 */
import 'axios'
declare module 'axios' {
  interface AxiosRequestConfig {
    noToast?: ((error) => boolean) | boolean
    noparse?: boolean
    noParse?: boolean
  }
}
