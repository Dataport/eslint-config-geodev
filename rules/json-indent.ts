import type { Rule } from 'eslint'

export default {
	meta: {
		type: 'layout',
		docs: {
			description: 'Require proper indentation with tabs in JSON files.',
		},
		fixable: 'whitespace',
		schema: [],
		messages: {
			mixedSpaces: 'Invalid indentation, expected {{ expected }} tabs but found {{ found }} tabs and {{ foundSpaces }} spaces',
			invalidSpaces: 'Invalid indentation, expected {{ expected }} tabs but found {{ found }} spaces',
			invalidDepth: 'Invalid indentation, expected {{ expected }} tabs but found {{ found }} tabs',
			inLine: 'Indentation started within a line?',
		},
	},

	create (context: Rule.RuleContext): Rule.RuleListener {
		const text = context.sourceCode.getText()
		let level = 0
		let checkedLine = -1

		function checkIndentLevel (pos: number, expected: number, node: Rule.Node) {
			if (!node.loc) { return }
			let found = 0
			let foundSpaces = 0
			let x = pos - 1
			for (; ; x--) {
				if (x < 0) { break }
				if (text[x] === '\t') {
					found++
				} else if (text[x] === ' ') {
					foundSpaces++
				} else { break }
			}
			if (x > -1 && text[x] !== '\n') {
				context.report({
					loc: node.loc,
					messageId: 'inLine',
				})
				return
			}
			function fix (fixer: Rule.RuleFixer) {
				return fixer.replaceTextRange([x + 1, pos], '\t'.repeat(expected))
			}
			if (foundSpaces > 0 && found > 0) {
				context.report({
					loc: node.loc,
					messageId: 'mixedSpaces',
					data: {
						expected: expected.toString(),
						found: found.toString(),
						foundSpaces: foundSpaces.toString(),
					},
					fix,
				})
			} else if (foundSpaces > 0) {
				context.report({
					loc: node.loc,
					messageId: 'invalidSpaces',
					data: {
						expected: expected.toString(),
						found: foundSpaces.toString(),
					},
					fix,
				})
			} else if (expected !== found) {
				context.report({
					loc: node.loc,
					messageId: 'invalidDepth',
					data: {
						expected: expected.toString(),
						found: found.toString(),
					},
					fix,
				})
			}
		}

		return {
			Object (node: Rule.Node) {
				level++
				if (!node.loc) { return }
				checkedLine = node.loc.start.line
			},
			'Object:exit' () {
				level--
			},
			Member (node: Rule.Node) {
				if (!node.loc || !node.range || checkedLine === node.loc.start.line) { return }
				checkIndentLevel(node.range[0], level, node)
				checkedLine = node.loc.start.line
			},
			'Member:exit' (node: Rule.Node) {
				if (!node.loc || !node.range || checkedLine === node.loc.end.line) { return }
				checkIndentLevel(node.range[1] - 1, level, node)
				checkedLine = node.loc.end.line
			},
			Array (node: Rule.Node) {
				level++
				if (!node.loc) { return }
				checkedLine = node.loc.start.line
			},
			'Array:exit' () {
				level--
			},
			Element (node: Rule.Node) {
				if (!node.loc || !node.range || checkedLine === node.loc.start.line) { return }
				// @ts-expect-error | This is bad typed, fixme
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
				checkIndentLevel(node.value.range[0], level, node)
				checkedLine = node.loc.start.line
			},
			'Element:exit' (node: Rule.Node) {
				if (!node.loc || !node.range || checkedLine === node.loc.end.line) { return }
				// @ts-expect-error | This is bad typed, fixme
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				checkIndentLevel(node.value.range[1] - 1, level, node)
				checkedLine = node.loc.end.line
			},
		}
	},
} satisfies Rule.RuleModule
