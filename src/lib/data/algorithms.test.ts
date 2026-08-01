import { describe, it, expect, beforeAll } from 'vitest';
import { puzzles } from 'cubing/puzzles';
import { casesStatic } from '$lib/casesStatic';
import { checkF2LState } from '$lib/utils/checkF2LState';
import { getCaseAlg, getCaseScramble } from '$lib/casesState.svelte';
import { GROUP_IDS } from '$lib/types/group';
import type { Side } from '$lib/types/Side';
import type { AlgorithmSelection, CustomAlgorithm } from '$lib/types/caseState';

const SIDES: Side[] = ['right', 'left'];

describe('F2L Scrambles and Algorithms Validation', () => {
	let kpuzzle: any;
	let puzzlePattern: any;

	beforeAll(async () => {
		const puzzle = puzzles['3x3x3'];
		kpuzzle = await puzzle.kpuzzle();
		puzzlePattern = { kpuzzle };
	});

	GROUP_IDS.forEach((groupId) => {
		describe(`Group: ${groupId}`, () => {
			const groupCases = casesStatic[groupId];
			if (!groupCases) return;

			Object.values(groupCases).forEach((caseDef) => {
				const { caseId, algPool, scramblePool, pieceToHide } = caseDef;

				describe(`Case: ${caseId}`, () => {
					SIDES.forEach((side) => {
						it(`should solve correctly on the ${side} side`, async () => {
							for (let scrambleIndex = 0; scrambleIndex < scramblePool.length; scrambleIndex++) {
								const scramble = getCaseScramble(caseDef, side, scrambleIndex);

								for (let algIndex = 0; algIndex < algPool.length; algIndex++) {
									const algorithmSelection: AlgorithmSelection = { left: algIndex, right: algIndex };
									const customAlgorithm: CustomAlgorithm = { left: '', right: '' };
									const alg = getCaseAlg(caseDef, algorithmSelection, customAlgorithm, side);

									if (!scramble || !alg) continue;

									// Algorithms might leave the cube rotated (e.g. y, y'). checkF2LState checks absolute positions.
									// So we test all 4 possible y-rotations to see if F2L is solved in any of them.
									const yRotations = ['', 'y', 'y2', "y'"];
									let isSolved = false;
									for (const yRot of yRotations) {
										const adjustedAlg = alg + (yRot ? ` ${yRot}` : '');
										const state = await checkF2LState(
											puzzlePattern,
											scramble,
											adjustedAlg,
											pieceToHide,
											side
										);
										if (state.f2lSolved) {
											isSolved = true;
											break;
										}
									}

									if (!isSolved) {
										console.log(`Failed - Group: ${groupId}, Case: ${caseId}, Side: ${side}`);
										console.log(`Scramble: ${scramble}`);
										console.log(`Alg: ${alg}`);
									}
									expect(isSolved, `Group: ${groupId}, Case: ${caseId}, Side: ${side}, Scramble: ${scramble}, Alg: ${alg}`).toBe(true);
								}
							}
						});
					});
				});
			});
		});
	});
});
