import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Ensure this matches your GitHub repository name
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Add alias for src directory
    },
    extensions: ['.js', '.jsx'],
  },
})
