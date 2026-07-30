import { describe, it, expect } from 'vitest';
import { CASE_ATTRIBUTES } from './caseAttributes';

import { GROUP_DEFINITIONS } from './group';

describe('CASE_ATTRIBUTES Validation', () => {
	it('should have attributes for every defined case', () => {
		for (const [groupId, groupDef] of Object.entries(GROUP_DEFINITIONS)) {
			const groupCases = new Set<number>();
			groupDef.categories.forEach((cat) => cat.cases.forEach((c) => groupCases.add(c)));

			const groupAttributes = CASE_ATTRIBUTES[groupId as keyof typeof CASE_ATTRIBUTES];
			expect(groupAttributes, `Missing attributes for group ${groupId}`).toBeDefined();

			for (const caseId of groupCases) {
				const attrs = groupAttributes?.[caseId];
				expect(attrs, `Missing attributes for case ${caseId} in group ${groupId}`).toBeDefined();
			}
		}
	});
});
