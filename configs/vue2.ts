import vue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'

/**
 * Shared ESLint configuration for Vue 2 files.
 */
export default defineConfig(
	...vue.configs['flat/vue2-recommended'],
	{
		rules: {
			'vue/multi-word-component-names': 'warn',
			'vue/order-in-components': 'error',
		},
	},
)
