import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'
import dts from 'vite-plugin-dts'
import { apiProxyDomain } from './localEnvConfig'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'es',
    minify: false,
    sourcemap: false,
    rollupOptions: {
      external: ['vue', '@ss/mtd-vue'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: 'es'
        },
      ]
    },
    lib: {
      entry: './src/components/index.ts',
      name: 'index'
    }
  },

  plugins: [
    createVuePlugin(),
    dts({
      entryRoot: './src',
      outDir: ['es/src', 'lib/src'],
      tsconfigPath: './tsconfig.json'
    })
  ],
  server: {
    proxy: {
      '/stat/user/year': {
        changeOrigin: true,
        secure: false,
        target: apiProxyDomain
      },
      // 开发papi mock
      '/mock': {
        changeOrigin: true,
        secure: false,
        rewrite: p => p.replace(/^\/mock\/api/, '/api/req/4afd5161-0890-4944-9509-3a159214e3f6'),
        target: 'https://papi.sankuai.com/'
      },
      '/api/mtbi': {
        changeOrigin: true,
        secure: false,
        target: apiProxyDomain
      },
      '/api': {
        changeOrigin: true,
        secure: false,
        target: apiProxyDomain
      },
      '/excel/api': {
        changeOrigin: true,
        secure: false,
        target: apiProxyDomain
      },
      '/msapi': {
        changeOrigin: true,
        secure: false,
        target: apiProxyDomain
      },
      '/monitorb': {
        changeOrigin: true,
        secure: false,
        target: apiProxyDomain
      },
      '/nsql/api': {
        changeOrigin: true,
        secure: false,
        target: apiProxyDomain
      },
      '/api/moshu': {
        changeOrigin: true,
        secure: false,
        target: apiProxyDomain
      },
      '/canary': {
        changeOrigin: true,
        secure: false,
        target: apiProxyDomain
      },
      '/data-handler-ms': {
        changeOrigin: true,
        secure: false,
        target: 'https://sql.sankuai.com',
        rewrite: path => path.replace('/data-handler-ms', '/api/v1')
      }
    }
  },
  resolve: {
    alias: {
      '@infrastructure': path.resolve(__dirname, 'src/infrastructure'),
      '@bizCore': path.resolve(__dirname, 'src/bizCore'),
      '@api': path.resolve(__dirname, 'src/api')
    }
  }
})
