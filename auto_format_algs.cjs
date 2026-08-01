const fs = require('fs');

const TRIGGERS = [
	['R', 'U', "R'"],
	['R', "U'", "R'"],
	['R', 'U2', "R'"],
	['L', 'U', "L'"],
	['L', "U'", "L'"],
	['L', 'U2', "L'"],
	["R'", 'F', 'R', "F'"],
	['L', "F'", "L'", 'F'],
	['F', "R'", "F'", 'R'],
	["F'", 'L', 'F', "L'"],
	['f', 'R', "f'"],
	['f', "R'", "f'"],
	["f'", "L'", 'f'],
	["f'", 'L', 'f']
];

function fixAlg(alg) {
	let tokens = alg.split(' ').filter((t) => t.length > 0);
	let newTokens = [];
	let inBracket = false;

	for (let i = 0; i < tokens.length; i++) {
		let isStart = tokens[i].startsWith('(');
		let isEnd = tokens[i].endsWith(')');
		if (isStart) inBracket = true;

		let matchLen = 0;

		if (!inBracket) {
			for (let trigger of TRIGGERS) {
				if (i + trigger.length <= tokens.length) {
					let match = true;
					for (let j = 0; j < trigger.length; j++) {
						let tStr = tokens[i + j].replace(/^\(/, '').replace(/\)$/, '');
						if (tStr !== trigger[j]) {
							match = false;
							break;
						}
						if (tokens[i + j].includes('(') || tokens[i + j].includes(')')) {
							match = false;
							break;
						}
					}
					if (match) {
						matchLen = trigger.length;
						break;
					}
				}
			}
		}

		if (matchLen > 0) {
			newTokens.push('(' + tokens[i]);
			for (let j = 1; j < matchLen - 1; j++) {
				newTokens.push(tokens[i + j]);
			}
			newTokens.push(tokens[i + matchLen - 1] + ')');
			i += matchLen - 1;
		} else {
			newTokens.push(tokens[i]);
		}

		if (isEnd) inBracket = false;
	}
	return newTokens.join(' ');
}

const files = [
	'src/lib/data/algorithms/advanced_algorithms.ts',
	'src/lib/data/algorithms/basic_algorithms.ts',
	'src/lib/data/algorithms/basic_algorithms_back.ts',
	'src/lib/data/algorithms/expert_algorithms.ts'
];

files.forEach((file) => {
	let content = fs.readFileSync(file, 'utf8');

	// Correct regex to match double quoted or single quoted strings entirely
	let newContent = content.replace(
		/"([^"]*)"|'([^']*)'/g,
		(fullMatch, doubleQuoted, singleQuoted) => {
			let str = doubleQuoted !== undefined ? doubleQuoted : singleQuoted;
			let fixed = fixAlg(str);

			if (doubleQuoted !== undefined) {
				return '"' + fixed + '"';
			} else {
				return "'" + fixed + "'";
			}
		}
	);

	if (newContent !== content) {
		fs.writeFileSync(file, newContent);
		console.log('Updated ' + file);
	}
});
