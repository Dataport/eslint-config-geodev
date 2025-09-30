import html from '@html-eslint/eslint-plugin'

export default [
	html.configs['flat/recommended'],
	{
		rules: {
			'@html-eslint/indent': ['error', 'tab'],
		},
	},
]
