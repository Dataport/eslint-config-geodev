import markdown from '@eslint/markdown'
import { defineConfig } from 'eslint/config'

/**
 * Shared ESLint configuration for Markdown files.
 */
export default defineConfig(
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
)
