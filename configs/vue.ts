import tsParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import vueParser from 'vue-eslint-parser'

/**
 * Shared ESLint configuration for Vue files.
 */
export default defineConfig(
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
)
