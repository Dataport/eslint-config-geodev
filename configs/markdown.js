import markdown from '@eslint/markdown'

export default [
	{
		plugins: {
			markdown,
		},
		language: 'json/json',
	},
	...markdown.configs.recommended,
	{
		rules: {
			'markdown/no-missing-label-refs': 'off',
		},
	},
]
