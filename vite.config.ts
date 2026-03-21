import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	root: resolve(process.cwd(), 'src'),
	build: {
		outDir: resolve(process.cwd(), 'public'),
		emptyOutDir: true,
		reportCompressedSize: true
	},
	server: {
		port: 4200,
		host: 'localhost'
	}
})
