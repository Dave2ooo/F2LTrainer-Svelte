// Source https://github.com/Dave2ooo/F2LTrainer

import type { AlgorithmCollection } from '..';

export const expertAlgorithms: AlgorithmCollection = {
	1: ["R2 U' R2' U R2", "y2 L2' U' L2 U L2'", "y F' R' F2 R F"],
	2: ["f' R' U R f", "y R' u' R u R", "y' L' u' L u L", "y2 f' D' L D f"],
	3: ["y L2' U L2 U' L2'", "y' R2 U R2' U' R2", "F L F2' L' F'"],
	4: ["y f (L U' L') f'", "L u L' u' L'", "y2 R u R' u' R'", "y' f D R' D' f'"],
	5: ["L2' u' L2 u L2'", "y' R2 u R2' u' R2", "y L2' u L2 u' L2'", "y2 R2 u' R2' u R2"],
	6: [
		"(L' u' L) U (L' u L)",
		"y' (R u R') U' (R u' R')",
		"y (L u L') U' (L u' L')",
		"y2 (R' u' R) U (R' u R)"
	],
	7: [
		"R' F R2 U' R2' F' R",
		"L F' L2' U' L2 F L'",
		"y (f' L' f) U' (L' U L)",
		"y' (R U R') U' (f R' f')",
		"y2 (f R f') (L U2 L')"
	],
	8: [
		"y L F' L2' U L2 F L'",
		"y R' F R2 U R2' F' R",
		"(f R f') U (R U' R')",
		"y2 (L' U' L) U (f' L f)",
		"y' (f' L' f) (R' U2' R)"
	],
	9: ["R (L U2 L') R'", "y L' (R' U2 R) L"],
	10: ["L F2' L' F U' F", "(L F' L' U' F) U' (R U R')", "y (L U' F' L' F) (L' U L)"],
	11: ["y R' F2 R F' U F'", "y (R' F R U F') U (L' U' L)", "(R' U F R F') (R U' R')"],
	12: ["(R' F R U' F') (R U' R')", "y (L' U' L) U (S' L' S)"],
	13: ["y (L F' L' U F) (L' U L)", "(R U R') U' (S R S')"],
	14: [
		"(L' U L) (M' U R U' r') (R U' R')",
		"y (L U F' L' F) U2 (L' U' L)",
		"y (L U L') (F U F') U' (L' U L)"
	],
	15: [
		"y (R U' R') (M' U' L' U l) (L' U L)",
		"(R' U' F R F') U2 (R U R')",
		"(R' U' R) (F' U' F) U (R U' R')"
	],
	16: ["(R' F R U' F') U (R U' R')", "R U' R2' u' R' u R", "y2 L U' L2' u' L' u L"],
	17: ["y (L F' L' U F) U' (L' U L)", "y L' U L2 u L u' L'", "y' R' U R2 u R u' R'"],
	18: ["F' U R' U2 R F", "(R' F R F') U R' U2 R", "(R U' R') U' (f R f')", "(R U R') U' B U' B'"],
	19: [
		"R U' R2 U' (R U' R') U' R",
		"(R U' R') U' R U' R2 U' R",
		"(r U' r') U2 (r U r') d' (R U R')",
		"(R U R) y2 U2 (L U L') U L2"
	],
	20: [
		"F' U (L' U L) U' (L U L') F",
		"(R U' R') U' (R U' R') d' (R' U' R)",
		"(R U' R') y (R' U R) U (R' U' R)",
		"F' U F (L U L') U (L U' L')"
	],
	21: [
		"(R U' R') U' (L' U L) U (L' U' L)",
		"(R U' R') U' (R U' R') U2 (L' U' L)",
		"M F M' U (L' U L) U' (L' U L)",
		"(r U' r') U2 (r U r') d (R U R')"
	],
	22: ["(R U R') U' (R U' R') U (R' U' R)", "(R U' R') U (R' U' R) U' (R' U R)"],
	23: [
		"(R U R') U' (R U' R') (f' L' f)",
		"(R U' R') U f' U' (L' U L') f",
		"(R U R') F (R U R') U' F' (L U2 L')",
		"(R U' R') y (R' U' R) U' (R' U R)"
	],
	24: [
		"(R U' R') U' (L' U' L) U' (L' U L)",
		"(R U R') U' (R U' R') U' (L' U' L)",
		"(R U' R') F' r' F' r2 U r'",
		"y' R' U R2 U R' U (R U R')"
	],
	25: [
		"F' (R' U R) U' (R' U' R) F",
		"(R U' R') U' (R U R') U (f R' f')",
		"(R U' R') U' (R U R') r' U' R U M'",
		"R U' R2 f' U' f R"
	],
	26: [
		"(R U' R') U' (R U R') (L U' L')",
		"(R U' R') U' R U M' B' r'",
		"(R U R') U' (R U2 R') U (L U L')",
		"(R U2 R') (L U2 L') U' (L U L')"
	],
	27: [
		"R' F R2 U' (R' U' R) U R' U2 F'",
		"(R' F R F') U2 (L' U L) U' (L' U' L)",
		"(R U' R') U' (R U R') U' F U' F'",
		"(R U' R') U' (R U R') (F U2 F')"
	],
	28: [
		"(R U R') U2 (R U' R') (f R f')",
		"F' U' (R' U2 R) U (R' U' R) F",
		"(R U' R') y (R U2 R') U (R U' R')",
		"(R U' R') U (R U2 R') y (R U' R')"
	],
	29: [
		"(R U' R') U (R U2 R') (L U2 L')",
		"(R U' R') U' (L U2 L') U (L U' L')",
		"(R U R') (L U' L') U (L U L')",
		"(R U' R') U (R U2 R') U' (L U' L')"
	],
	30: [
		"(R U R') d' (L U' L') U (L U L')",
		"(R U R') U' y' (R U' R') U (R U R')",
		"(R U R') (L' U L) U' (L F' L' F) (L' U L)",
		"(R U' R') y' U2 (R U2 R') U (R U' R')"
	],
	31: [
		"R U' R2 U2 (R U R') U2 R",
		"R U' R2 U2 (R U2 R') U R",
		"(F R' F') R U' R U2 R2 U' R",
		"(R' F R F') (R U' R') U (R U' R') U y (R U' R')"
	],
	32: [
		"(R U' R') d (R' U2 R) (L' U L)",
		"F' U2 L' U2 L2 U L' F",
		"(R U' R') U y (L' U2 L) (R' U R)",
		"(R U' R') y U' (R' U2 R) U (R' U2 R)"
	],
	33: [
		"(R U' R') U2 (L' U2 L) U2 (L' U L)",
		"y' R' U R2 U2 (R' U2 R) U' R'",
		"y' R' U R2 U2 (R' U' R) U2 R'",
		"(R' F R F') (R U' R') U (R U' R') d' (L U' L')"
	]
} as const;
