import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': {},
  },
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
  },
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/main.tsx'),
      name: 'Slide3React',
      fileName: (format) => `slide3-react.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ['react', 'react-dom'], // WE WANT TO BUNDLE THEM for this html
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./"),
    },
  },
})
