import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  mode: 'production',
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
