import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const customPlugin = (): Plugin => {
  return {
    name: 'customPlugin',
    buildEnd() {
      console.log('结束了');
    },
    buildStart() {
      console.log('buildStart');
    },
    configureServer(server) {
      return () => {
        console.log('dev后执行?');
        server.httpServer?.once('listening', () => {
          console.log('执行了');
        })
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), customPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
