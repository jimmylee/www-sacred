import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ['react', 'react-dom', 'tailwindcss'],
  noExternal: ['@common/*', '@modules/*'],
  outDir: 'dist',
  target: 'es2019',
  tsconfig: 'tsconfig.json',
  loader: {
    '.css': 'css'
  }
}); 