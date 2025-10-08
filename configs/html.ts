import html from '@html-eslint/eslint-plugin'
import { defineConfig } from 'eslint/config'

/**
 * Shared ESLint configuration for HTML files.
 */
export default defineConfig(
	html.configs['flat/recommended'],
	{
		rules: {
			'@html-eslint/indent': ['error', 'tab'],
		},
	},
)
