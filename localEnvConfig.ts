/**
 * 1. 使用 yarn start 启动时，只需要修改 DEFAULT_LOCAL_ENV 即可热更新切换环境
 * 2. 使用 yarn start:xxx 启动时，无需修改配置
 */

// 本地默认的 ENV
const DEFAULT_LOCAL_ENV: 'production' | 'staging' | 'test' = 'production'

let { LOCAL_ENV, SWIMLANE_KEY } = process.env

const geApiProxyDomainByEnv = (env: string) => {
  switch (env) {
    case 'test':
      return SWIMLANE_KEY ? `https://${SWIMLANE_KEY}-sl-mdbi.bi.test.sankuai.com` : 'https://mdbi.bi.test.sankuai.com'
    case 'staging':
      return 'https://mdbi.bi.st.sankuai.com'
    case 'production':
      return 'https://bi.sankuai.com'
    default:
      return 'https://mdbi.bi.test.sankuai.com'
  }
}

// 当前使用的环境
LOCAL_ENV = LOCAL_ENV ? LOCAL_ENV : DEFAULT_LOCAL_ENV



/** 开发服务代理目标地址 */
const apiProxyDomain = geApiProxyDomainByEnv(LOCAL_ENV)

export { LOCAL_ENV, apiProxyDomain }
