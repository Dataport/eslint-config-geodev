import json from '@eslint/json'
import dataportGeodev from '../rules/index.js'

export default [
	{
		plugins: {
			json,
		},
		language: 'json/json',
		...json.configs.recommended,
	},
	{
		plugins: {
			'dataport-geodev': dataportGeodev,
		},
		rules: {
			'json/top-level-interop': 'error',
			'dataport-geodev/json-indent': 'error',
		},
	},
]
