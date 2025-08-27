import js from '@eslint/js'
import neostandard from 'neostandard'

export default [
	js.configs.recommended,
	...neostandard(),
	{
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

			'import-x/order': 'error',
		},
	},
]
