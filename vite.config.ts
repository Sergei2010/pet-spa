import { defineConfig } from 'vite'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin'
import { resolve } from 'path'

export default defineConfig({
	root: resolve(process.cwd(), 'pet-spa/src'),
	cacheDir: '../node_modules/.vite/pet-spa',
	server: {
		port: 4200,
		host: 'localhost'
	},
	preview: {
		port: 4300,
		host: 'localhost'
	},
	plugins: [nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
	build: {
		outDir: resolve(process.cwd(), 'public'),
		emptyOutDir: true,
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true
		}
	}
})
