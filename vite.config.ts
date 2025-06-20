import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		// Enable global variables for testing
		globals: true,
		// Use jsdom as the environment
		environment: 'jsdom',
		// Path to the setup file
		setupFiles: './src/vitest.setup.ts',
	},
})
