import js from '@eslint/js'
import neostandard from 'neostandard'

export default [
	js.configs.recommended,
	...neostandard(),
	{
		rules: {
			'comma-dangle': ['error', 'always-multiline'],
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'no-debugger': 'error',
			curly: 'error',
			'no-else-return': 'error',
			'no-lonely-if': 'error',
			'require-await': 'error',
			'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
			'no-eval': 'error',
			'no-implied-eval': 'error',
			complexity: 'warn',
			'max-depth': 'warn',

			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/no-tabs': 'off',
			'@stylistic/no-multi-spaces': 'error',
			'@stylistic/brace-style': 'error',
			'@stylistic/no-extra-parens': 'error',
			'@stylistic/eol-last': 'error',

			'import-x/order': 'error',
		},
	},
]
