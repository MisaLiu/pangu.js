import path from 'path';
import { defineConfig } from 'vite';
import PackageInfo from './package.json';

export default defineConfig({
  mode: 'production',
  define: {
    __MODULE_VERSION__: JSON.stringify(PackageInfo.version),
  },
  build: {
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, './src/index.js'),
      name: 'pangu',
      formats: [ 'cjs' ],
      fileName: 'index',
    },
    rollupOptions: {
      external: [ 'fs' ],
    },
  }
});
