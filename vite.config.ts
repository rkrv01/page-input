import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const basePath = '/page-input/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
  build: {
    outDir: path.resolve(__dirname, 'publish', basePath.slice(1, -1)),
    emptyOutDir: true,
  },
});