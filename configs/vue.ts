import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'

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
