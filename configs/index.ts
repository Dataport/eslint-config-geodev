import js from '@eslint/js'
import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config'
import neostandard from 'neostandard'

/**
 * Shared ESLint configuration for JavaScript files.
 */
export default defineConfig(
	js.configs.recommended,
	...neostandard(),
	{
		plugins: {
			perfectionist,
		},
		rules: {
			'no-console': ['error', { allow: ['warn', 'error'] }],
			curly: ['error', 'all'],
			'no-else-return': 'error',
			'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
			complexity: 'warn',
			'max-depth': 'warn',

			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/no-tabs': 'off',

			'perfectionist/sort-imports': 'error',
		},
	},
)
