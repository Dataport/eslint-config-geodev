import globals from 'globals'

export default [
	{
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
			},
		},
		rules: {
			'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
		},
	},
]
