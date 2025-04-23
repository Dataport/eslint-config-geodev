import { defineConfig } from 'eslint/config'
import geodevConfig from './configs/index.js'

export default defineConfig([
	{
		files: [ '**/*.js' ],
		extends: [ geodevConfig ],
	},
])
