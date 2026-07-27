import { describe, it, expect } from 'vitest';
import { CASE_ATTRIBUTES } from './caseAttributes';
import type { GroupId, CaseId } from './group';

describe('CASE_ATTRIBUTES Validation', () => {
	it('should not contain impossible combinations of attributes', () => {
		const errors: string[] = [];

		for (const groupIdStr of Object.keys(CASE_ATTRIBUTES)) {
			const groupId = groupIdStr as GroupId;
			const groupAttrs = CASE_ATTRIBUTES[groupId];
			if (!groupAttrs) continue;

			for (const caseIdStr of Object.keys(groupAttrs)) {
				const caseId = parseInt(caseIdStr, 10) as CaseId;
				const attrs = (groupAttrs as any)[caseId];
				if (!attrs) continue;

				// 1. cornerPosition: top, cornerOrientation: solved
				if (attrs.cornerPosition === 'top' && attrs.cornerOrientation === 'solved') {
					errors.push(`[${groupId} - ${caseId}] Impossible: cornerPosition top + cornerOrientation solved`);
				}

				// 2. cornerPosition: bottom_correct or bottom_wrong, cornerOrientation: up
				if (
					(attrs.cornerPosition === 'bottom_correct' || attrs.cornerPosition === 'bottom_wrong') &&
					attrs.cornerOrientation === 'up'
				) {
					errors.push(`[${groupId} - ${caseId}] Impossible: cornerPosition ${attrs.cornerPosition} + cornerOrientation up`);
				}

				// (Rules 3 and 4 were removed because 'solved' and 'flipped' edge orientations were merged into 'oriented' and 'unoriented')
			}
		}

		if (errors.length > 0) {
			console.error('Found impossible combinations:', errors);
		}

		expect(errors).toHaveLength(0);
	});
});
