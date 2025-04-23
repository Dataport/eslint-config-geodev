import { defineConfig } from 'eslint/config'
import mainConfig from './configs/index.js'
import nodeConfig from './configs/node.js'

export default defineConfig([
	{
		files: ['**/*.js'],
		extends: [mainConfig, nodeConfig],
	},
])
