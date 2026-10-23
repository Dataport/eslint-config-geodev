import type { Linter } from 'eslint'

import vuePugPlugin from 'eslint-plugin-vue-pug'
import { defineConfig } from 'eslint/config'

/*
 * `eslint-plugin-vue-pug` is published as CommonJS but ships ESM style type
 * declarations. TypeScript therefore models the default import as the module
 * namespace object, while at runtime the default import already is the plugin
 * itself.
 */
const vuePug = vuePugPlugin as unknown as typeof vuePugPlugin.default

/**
 * Shared ESLint configuration for Vue files using Pug templates.
 */
export default defineConfig(
	...(vuePug.configs['flat/recommended'] as Linter.Config[]),
)
