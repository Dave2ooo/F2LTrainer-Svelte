import type { GroupId, CaseId } from './group';

export type CornerPosition = 'top' | 'bottom_correct' | 'bottom_wrong';
export type CornerOrientation = 'up' | 'front_back' | 'side' | 'solved';
export type EdgePosition = 'top' | 'solved_slot' | 'wrong_slot';
export type EdgeOrientation = 'oriented' | 'unoriented' | 'solved' | 'flipped';

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
			cornerOrientation: 'up',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		19: {
			cornerPosition: 'top',
			cornerOrientation: 'up',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		21: {
			cornerPosition: 'top',
			cornerOrientation: 'up',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},
		23: {
			cornerPosition: 'top',
			cornerOrientation: 'up',
			edgePosition: 'top',
			edgeOrientation: 'oriented'
		},

		// Pieces on Top / White facing Up / Edge unoriented
		18: {
			cornerPosition: 'top',
			cornerOrientation: 'up',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		20: {
			cornerPosition: 'top',
			cornerOrientation: 'up',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		22: {
			cornerPosition: 'top',
			cornerOrientation: 'up',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},
		24: {
			cornerPosition: 'top',
			cornerOrientation: 'up',
			edgePosition: 'top',
			edgeOrientation: 'unoriented'
		},

		// Edge solved (Corner on top)
		32: {
			cornerPosition: 'top',
			cornerOrientation: 'up',
			edgePosition: 'solved_slot',
			edgeOrientation: 'solved'
		},
		33: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'solved'
		},
		34: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'solved'
		},
		38: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'solved'
		},
		39: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'solved'
		},

		// Edge flipped (Corner on top)
		31: {
			cornerPosition: 'top',
			cornerOrientation: 'up',
			edgePosition: 'solved_slot',
			edgeOrientation: 'flipped'
		},
		35: {
			cornerPosition: 'top',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'flipped'
		},
		36: {
			cornerPosition: 'top',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'flipped'
		},
		37: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'solved',
			edgePosition: 'solved_slot',
			edgeOrientation: 'flipped'
		},
		40: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'front_back',
			edgePosition: 'solved_slot',
			edgeOrientation: 'flipped'
		},
		41: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'side',
			edgePosition: 'solved_slot',
			edgeOrientation: 'flipped'
		},

		// Corner on Bottom / Edge on Top / Edge oriented
		25: {
			cornerPosition: 'bottom_correct',
			cornerOrientation: 'solved',
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
			cornerOrientation: 'solved',
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
	}
};
