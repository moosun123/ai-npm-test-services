/// <reference types="vite/client" />
 

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface Window {
  Owl: any
  webVersion: string
  /** 老逻辑，后续看看删掉 */
  __USER_IP__: string
  LXAnalytics: (...rest: unknown[]) => void
  DataReportSDK: Record<string, { setUid: (uid: number) => void }>
  __SSO_CLIENTID__: string
  /** Talos部署环境：production、staging、test01... */
  __DEPLOY_ENV__: string
  __ENV__: 'production' | 'development' | 'staging' | 'test'
  DataSecuritySDK: {
    run(
      type: string,
      options: {
        misid: string
      }
    ): void
  }
  /** 文殊安全下载SDK自动注入的对象 */
  secDBDownload: {
    downloadFile(url: string, misId: string): void
  }

}

// 解析Promise类型，例如：PromiseType<Promise<k>> === k
type PromiseType<T extends Promise<any>> = T extends Promise<infer P> ? P : any
