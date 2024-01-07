import { defineConfig, presetUno, presetAttributify, transformerDirectives, transformerAttributifyJsx } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx(),
  ],
});
