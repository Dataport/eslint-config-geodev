import { defineConfig } from 'eslint/config'
import mainConfig from './configs/index.js'
import nodeConfig from './configs/node.js'
import tsConfig from './configs/typescript.js'

export default defineConfig([
	{
		ignores: ['dist', 'node_modules'],
	},
	{
		files: ['**/*.js'],
		extends: [mainConfig, nodeConfig],
	},
	{
		files: ['**/*.ts'],
		extends: [mainConfig, nodeConfig, tsConfig],
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['*.ts'],
				},
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			'@typescript-eslint/naming-convention': 'off',
		},
	},
])
