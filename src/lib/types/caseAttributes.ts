import type { GroupId, CaseId } from './group';

export type CornerPosition = 'top' | 'bottom_correct' | 'bottom_wrong';
export type CornerOrientation = 'up_down' | 'front_back' | 'side';
export type EdgePosition = 'top' | 'solved_slot' | 'wrong_slot';
export type EdgeOrientation = 'oriented' | 'unoriented';

export interface CaseAttributes {
	cornerPosition: CornerPosition;
	cornerOrientation: CornerOrientation;
	edgePosition: EdgePosition;
	edgeOrientation: EdgeOrientation;
}

// We will map all cases here.
// For now, we populate this using partial information from the categories.
// You will likely need to adjust the specific orientations for cases where the category didn't explicitly state it.
export const CASE_ATTRIBUTES: Partial<Record<GroupId, Record<CaseId, CaseAttributes>>> = {
	basic: {
		// Basic Inserts
		1: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		2: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		3: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		4: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},

		// Pieces on Top / White facing Front / Edge oriented
		5: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		7: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		15: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},

		// Pieces on Top / White facing Front / Edge unoriented
		9: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		11: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		13: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},

		// Pieces on Top / White facing Side / Edge oriented
		10: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		12: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		14: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},

		// Pieces on Top / white facing Side / Edge unoriented
		6: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		8: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		16: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},

		// Pieces on Top / White facing Up / Edge oriented
		17: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		19: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		21: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		23: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},

		// Pieces on Top / White facing Up / Edge unoriented
		18: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		20: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		22: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		24: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},

		// Edge solved (Corner on top)
		32: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		33: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		34: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		38: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		39: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},

		// Edge flipped (Corner on top)
		31: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		35: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		36: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		37: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		40: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		41: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},

		// Corner on Bottom / Edge on Top / Edge oriented
		25: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		27: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		30: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},

		// Corner on Bottom / Edge on Top / Edge unoriented
		26: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		28: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		29: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		}
	},
	basicBack: {
		// Basic Inserts
		1: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		2: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		3: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		4: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},

		// Pieces on Top / white facing Back / Edge oriented
		6: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		8: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		16: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},

		// Pieces on Top / White facing Back / Edge unoriented
		10: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		12: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		14: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},

		// Pieces on Top / White facing Side / Edge oriented
		9: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		11: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		13: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},

		// Pieces on Top / White facing Side / Edge unoriented
		5: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		7: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		15: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},

		// Pieces on Top / White facing Up / Edge oriented
		18: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		20: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		22: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		24: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},

		// Pieces on Top / White facing Up / Edge unoriented
		17: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		19: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		21: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		23: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},

		// Edge solved
		32: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		33: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		34: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		38: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		39: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},

		// Edge flipped
		31: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		35: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		36: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		37: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		40: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		41: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},

		// Corner on Bottom / Edge on Top / Edge oriented
		26: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		28: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		29: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},

		// Corner on Bottom / Edge on Top / Edge unoriented
		25: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		27: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		30: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		}
	},
	advanced: {
		// Slot in Front / White facing Up
		1: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		2: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		3: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		4: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},

		// Slot in Front / White facing Front
		9: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		10: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		13: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		14: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},

		// Slot in Front / White facing Side
		7: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		8: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		11: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		12: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},

		// Slot in Front / Corner in Adjacent Slot
		19: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		20: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		21: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		22: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		23: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		24: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},

		// Slot in Back / Edge in Adjacent Slot
		37: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		38: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		39: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		40: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		41: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		42: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},

		// Slot in Back / Corner in Adjacent Front Slot
		25: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		26: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		27: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		28: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		29: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		30: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},

		// Edge in Opposite Slot
		5: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		6: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		17: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		18: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		15: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		16: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},

		// Corner in Opposite Slot
		31: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		32: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		33: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		34: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		35: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		36: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},

		// Basic Cases / Free Slots
		43: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		44: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		45: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		46: {
			cornerPosition: 'top',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		47: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		48: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		49: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		50: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		51: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		52: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		53: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		54: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},

		55: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		56: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		57: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		58: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		59: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		},
		60: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'oriented'
		}
	},
	expert: {
		// Corner is solved
		1: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		2: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		3: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		4: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		5: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		6: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},

		// Pair in wrong slot
		7: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		8: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		9: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		18: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},

		// Both pieces in wrong slot / Edge oriented
		// 19, 21, 22, 24, 26, 29, 31, 33
		19: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		21: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		22: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		24: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		26: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		29: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		31: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},
		33: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'oriented'
		},

		// Both pieces in wrong slot / Edge unoriented
		// cases: [20, 23, 25, 27, 28, 30, 32]
		20: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		23: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		25: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		27: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		28: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		30: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		32: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},

		// Flipped edge & Corner in Adjacent Slot
		10: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		11: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		12: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		13: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		14: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'solved_slot',
			edgeOrientation: 'unoriented'
		},
		15: {
			cornerPosition: 'bottom_wrong',
			cornerOrientation: 'up_down',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},

		// Other easy Cases
		16: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		},
		17: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'wrong_slot',
			edgeOrientation: 'unoriented'
		}
	}
};
