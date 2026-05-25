import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    // Base URL for GitHub Pages with custom domain
    base: '/',
})
