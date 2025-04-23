import vue from 'eslint-plugin-vue'

export default [
	...vue.configs['flat/vue2-recommended'],
	{
		rules: {
			'vue/multi-word-component-names': 'warn',
			'vue/order-in-components': 'error',
		},
	},
]
