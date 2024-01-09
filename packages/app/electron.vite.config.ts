import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin, swcPlugin } from 'electron-vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  main: {
    plugins: [swcPlugin(), externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [
      UnoCSS(),
      commonjs(),
      vue(),
    ],
  },
});
