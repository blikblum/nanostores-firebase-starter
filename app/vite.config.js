import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import autoprefixer from 'autoprefixer'

export default defineConfig(({ mode }) => {
  const devModes = ['development', 'remote']
  return {
    root: 'src',
    build: {
      // Relative to the root
      outDir: '../dist',
    },
    publicDir: '../public',
    envDir: '..',
    build: { sourcemap: 'hidden' },
    plugins: [tsConfigPaths()],
    css: {
      postcss: { plugins: [autoprefixer()] },
    },
  }
})
