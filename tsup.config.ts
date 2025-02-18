import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'components/**/*.tsx',
    'index.ts'
  ],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  outDir: 'dist',
  treeshake: true,
  splitting: true,
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js'
    };
  },
  platform: 'browser',
  esbuildOptions(options) {
    options.outbase = './'
  }
}); 