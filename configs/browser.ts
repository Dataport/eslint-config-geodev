import { defineConfig } from 'eslint/config'
import globals from 'globals'

/**
 * Shared ESLint configuration for browser environments.
 *
 * This enables browser global variables like `window`, `document`, etc.
 */
export default defineConfig(
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
)
