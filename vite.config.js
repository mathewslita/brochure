import { defineConfig } from 'vite'

export default defineConfig({
    base: './', // Use relative paths for built assets (essential for GitHub Pages)
    server: {
        port: 3000,
    }
})
