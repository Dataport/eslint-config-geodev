import json from '@eslint/json'
import { defineConfig } from 'eslint/config'
import dataportGeodev from '../rules/index.js'

/**
 * Shared ESLint configuration for JSON files.
 */
export default defineConfig(
	{
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
)
