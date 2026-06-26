import { defineConfig } from 'eslint/config'

/**
 * Shared ESLint configuration for TypeScript files in Vue projects.
 */
export default defineConfig(
	{
		languageOptions: {
			parserOptions: {
				extraFileExtensions: ['.vue'],
			},
		},
	},
)
