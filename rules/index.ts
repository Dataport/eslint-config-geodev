import type { Rule } from 'eslint'
import jsonIndent from './json-indent.js'

export default {
	rules: {
		'json-indent': jsonIndent,
	},
} satisfies { rules: Partial<Record<string, Rule.RuleModule>> }
