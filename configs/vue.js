import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default [
	...vue.configs['flat/recommended'],
	{
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: {
					js: 'espree',
					ts: tsParser,
				},
				extraFileExtensions: ['.vue'],
			},
		},
	},
]
