import vuePug from 'eslint-plugin-vue-pug'
import { defineConfig } from 'eslint/config'

/**
 * Shared ESLint configuration for Vue files using Pug templates.
 */
export default defineConfig(
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
	...vuePug.configs['flat/recommended'],
)
