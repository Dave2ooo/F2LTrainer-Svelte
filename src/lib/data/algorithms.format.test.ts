import { describe, it, expect } from 'vitest';
import { casesStatic } from '$lib/casesStatic';
import { GROUP_IDS } from '$lib/types/group';

const TRIGGERS = [
	// R / L + U inserts
	['R', 'U', "R'"],
	['R', "U'", "R'"],
	['R', 'U2', "R'"],
	['L', 'U', "L'"],
	['L', "U'", "L'"],
	['L', 'U2', "L'"],
	// Sledgehammers & Hedgeslammers
	["R'", 'F', 'R', "F'"],
	['L', "F'", "L'", 'F'],
	['F', "R'", "F'", 'R'],
	["F'", 'L', 'F', "L'"],

	// Wide inserts
	['f', 'R', "f'"],
	['f', "R'", "f'"],
	["f'", "L'", 'f'],
	["f'", 'L', 'f']
];

describe('Algorithm Format Validation', () => {
	GROUP_IDS.forEach((groupId) => {
		describe(`Group: ${groupId}`, () => {
			const groupCases = casesStatic[groupId];
			if (!groupCases) return;

			Object.values(groupCases).forEach((caseDef) => {
				const { caseId, algPool } = caseDef;

				if (algPool.length === 0) return;

				describe(`Case: ${caseId}`, () => {
					algPool.forEach((alg, index) => {
						it(`should have proper bracket formatting for alg ${index + 1}: ${alg}`, () => {
							// 1. Check matching brackets
							let depth = 0;
							for (const char of alg) {
								if (char === '(') depth++;
								if (char === ')') depth--;
								expect(depth, 'Mismatched parentheses detected').toBeGreaterThanOrEqual(0);
							}
							expect(depth, 'Mismatched parentheses detected (unclosed bracket)').toBe(0);

							// 2. Parse tokens
							const tokens = alg.split(' ').filter((t) => t.length > 0);
							const moves: { move: string; inBracket: boolean }[] = [];
							let inBracket = false;

							for (const token of tokens) {
								const isStart = token.startsWith('(');
								const isEnd = token.endsWith(')');
								if (isStart) inBracket = true;

								const moveStr = token.replace(/^\(/, '').replace(/\)$/, '');
								moves.push({ move: moveStr, inBracket });

								if (isEnd) inBracket = false;
							}

							// 3. Search for completely unbracketed triggers
							for (let i = 0; i < moves.length; i++) {
								for (const trigger of TRIGGERS) {
									if (i + trigger.length <= moves.length) {
										let match = true;
										let allOutside = true;
										for (let j = 0; j < trigger.length; j++) {
											if (moves[i + j].move !== trigger[j]) {
												match = false;
												break;
											}
											if (moves[i + j].inBracket) {
												allOutside = false;
											}
										}

										if (match && allOutside) {
											expect.fail(`Found unbracketed sequence: "${trigger.join(' ')}" in "${alg}"`);
										}
									}
								}
							}
						});
					});
				});
			});
		});
	});
});
