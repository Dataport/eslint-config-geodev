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

	create (context) {
		const text = context.sourceCode.getText()
		let level = 0
		let checkedLine = -1

		function checkIndentLevel (pos, expected, node) {
			let found = 0
			let foundSpaces = 0
			let x = pos - 1
			for (;; x--) {
				if (x < 0) break
				if (text[x] === '\t') {
					found++
				} else if (text[x] === ' ') {
					foundSpaces++
				} else break
			}
			if (x > -1 && text[x] !== '\n') {
				context.report({
					loc: node.loc,
					messageId: 'inLine',
				})
				return
			}
			function fix (fixer) {
				return fixer.replaceTextRange([x + 1, pos], '\t'.repeat(expected))
			}
			if (foundSpaces > 0 && found > 0) {
				context.report({
					loc: node.loc,
					messageId: 'mixedSpaces',
					data: {
						expected,
						found,
						foundSpaces,
					},
					fix,
				})
			} else if (foundSpaces > 0) {
				context.report({
					loc: node.loc,
					messageId: 'invalidSpaces',
					data: {
						expected,
						found: foundSpaces,
					},
					fix,
				})
			} else if (expected !== found) {
				context.report({
					loc: node.loc,
					messageId: 'invalidDepth',
					data: {
						expected,
						found,
					},
					fix,
				})
			}
		}

		return {
			Object (node) {
				level++
				checkedLine = node.loc.start.line
			},
			'Object:exit' (node) {
				level--
			},
			Member (node) {
				if (checkedLine === node.loc.start.line) return
				checkIndentLevel(node.range[0], level, node)
				checkedLine = node.loc.start.line
			},
			'Member:exit' (node) {
				if (checkedLine === node.loc.end.line) return
				checkIndentLevel(node.range[1] - 1, level, node)
				checkedLine = node.loc.end.line
			},
			Array (node) {
				level++
				checkedLine = node.loc.start.line
			},
			'Array:exit' (node) {
				level--
			},
			Element (node) {
				if (checkedLine === node.loc.start.line) return
				checkIndentLevel(node.value.range[0], level, node)
				checkedLine = node.loc.start.line
			},
			'Element:exit' (node) {
				if (checkedLine === node.loc.end.line) return
				checkIndentLevel(node.value.range[1] - 1, level, node)
				checkedLine = node.loc.end.line
			},
		}
	},
}
