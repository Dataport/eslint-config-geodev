import tseslint from 'typescript-eslint'
import tsdoc from 'eslint-plugin-tsdoc'

export default [
	...tseslint.configs.strict,
	{
		plugins: {
			tsdoc,
		},
		rules: {
			'tsdoc/syntax': 'warn',
			'no-use-before-define': 'off',
			'@typescript-eslint/promise-function-async': 'off',
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
]
