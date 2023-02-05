import {defineConfig} from 'vite'
import AutoImport from 'unplugin-auto-import/vite';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue',
        // could add 'vue-router' or 'vitest', whatever else you need.
      ],
    }),
    vue()]
});