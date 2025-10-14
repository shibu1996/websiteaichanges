
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn', 'console.error'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        dead_code: true,
        unused: true,
        side_effects: false,
        collapse_vars: true,
        reduce_vars: true,
        hoist_funs: true,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        loops: true,
        sequences: true,
        properties: true,
        evaluate: true,
        booleans: true,
        typeofs: true,
        conditionals: true,
        comparisons: true,
        arithmetic: true,
        keep_fargs: false,
        keep_fnames: false
      },
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/
        },
        keep_fnames: false,
        keep_classnames: false
      },
      format: {
        comments: false,
        ascii_only: true,
        beautify: false
      },
      parse: {
        ecma: 2020
      },
      ecma: 2020
    },
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false
      },
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-core';
          }
          // Router
          if (id.includes('react-router')) {
            return 'router';
          }
          // UI Components
          if (id.includes('@radix-ui') || id.includes('@/components/ui')) {
            return 'ui-components';
          }
          // Icons
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          // Utilities
          if (id.includes('axios') || id.includes('dompurify') || id.includes('lodash')) {
            return 'utils';
          }
          // Theme specific
          if (id.includes('themes/multicolor')) {
            return 'theme-multicolor';
          }
          // Large dependencies
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `assets/[name]-[hash].js`;
        },
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  optimizeDeps: {
    exclude: [
      "lovable-tagger"
    ],
    force: true
  },
}));
