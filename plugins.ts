import perfectionist from 'eslint-plugin-perfectionist'
import tsdoc from 'eslint-plugin-tsdoc'
import vue from 'eslint-plugin-vue'
import vuePug from 'eslint-plugin-vue-pug'
import { plugins as neostandardPlugins } from 'neostandard'

/*
 * The type annotation is required: some plugins type their default export via
 * interfaces they do not export, so the inferred type cannot be named during
 * declaration emit (TS4023). Referencing them through `typeof` keeps the real
 * types while staying nameable.
 */
const plugins: typeof neostandardPlugins & {
	perfectionist: typeof perfectionist
	tsdoc: typeof tsdoc
	vue: typeof vue
	vuePug: typeof vuePug
} = {
	...neostandardPlugins,
	perfectionist,
	tsdoc,
	vue,
	vuePug,
}

export default plugins
