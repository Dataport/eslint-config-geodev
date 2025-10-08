import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import tsdoc from 'eslint-plugin-tsdoc'

/**
 * Shared ESLint configuration for TypeScript files.
 */
export default defineConfig(
	tseslint.configs.strictTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				ecmaVersion: 2021,
				sourceType: 'module',
			},
		},
	},
	{
		files: ['**/*.ts'],
		plugins: {
			tsdoc,
		},
		rules: {
			'tsdoc/syntax': 'warn',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: ['typeLike'],
					format: ['PascalCase'],
				},
				{
					selector: ['memberLike'],
					format: ['camelCase', 'UPPER_CASE', 'snake_case'],
				},
			],
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		},
	},
)
