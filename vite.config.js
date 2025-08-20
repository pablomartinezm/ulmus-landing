import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/', // Root path for custom domain
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
