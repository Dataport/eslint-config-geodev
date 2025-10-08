import { defineConfig } from 'eslint/config'
import globals from 'globals'

/**
 * Shared ESLint configuration for Node.js environments.
 *
 * This enables Node.js global variables and sets specific rules for console usage.
 */
export default defineConfig(
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
)
