<script lang="ts">
	import { tick } from 'svelte';
	import { Button, Dropdown, Checkbox, Badge, Hr } from 'flowbite-svelte';
	import { GROUP_IDS, GROUP_DEFINITIONS, type GroupId, type CaseId } from '$lib/types/group';
	import { CASE_ATTRIBUTES } from '$lib/types/caseAttributes';
	import { globalState } from '$lib/globalState.svelte';
	import CaseCard from '$lib/components/SelectView/CaseCard.svelte';
	import { ChevronDown } from '@lucide/svelte';

	let {
		onJumpToGroup
	}: {
		onJumpToGroup?: (groupId: GroupId) => void;
	} = $props();

	// Filter state: arrays of selected values
	const getFilter = () => globalState.filterCases;
	let selectedGroups = $derived(getFilter().groups);
	let selectedCornerPositions = $derived(getFilter().cornerPositions);
	let selectedCornerOrientations = $derived(getFilter().cornerOrientations);
	let selectedEdgePositions = $derived(getFilter().edgePositions);
	let selectedEdgeOrientations = $derived(getFilter().edgeOrientations);

	const groupOptions = GROUP_IDS.map((id) => ({ value: id, name: GROUP_DEFINITIONS[id].name }));

	const cornerPositionOptions = [
		{ value: 'top', name: 'Top Layer' },
		{ value: 'bottom_correct', name: 'Bottom Layer (Correct Slot)' },
		{ value: 'bottom_wrong', name: 'Bottom Layer (Wrong Slot)' }
	];

	const cornerOrientationOptions = [
		{ value: 'up_down', name: 'Facing Up/Down' },
		{ value: 'front_back', name: 'Facing Front/Back' },
		{ value: 'side', name: 'Facing Left/Right' }
	];

	const edgePositionOptions = [
		{ value: 'top', name: 'Top Layer' },
		{ value: 'solved_slot', name: 'Solved Slot' },
		{ value: 'wrong_slot', name: 'Wrong Slot' }
	];

	const edgeOrientationOptions = [
		{ value: 'oriented', name: 'Oriented' },
		{ value: 'unoriented', name: 'Unoriented' }
	];

	function toggleSelection(array: string[], value: string) {
		const index = array.indexOf(value);
		if (index === -1) {
			array.push(value);
		} else {
			array.splice(index, 1);
		}
	}

	async function handleJumpToCase(groupId: GroupId, caseId: CaseId) {
		const groupDef = GROUP_DEFINITIONS[groupId];
		const categoryIndex = groupDef.categories.findIndex((c) => c.cases.includes(caseId));

		if (categoryIndex !== -1) {
			globalState.categoriesOpenedObj[groupId][categoryIndex] = true;
		}

		if (onJumpToGroup) {
			onJumpToGroup(groupId);
		} else {
			globalState.selectedGroup = groupId;
		}

		await tick();

		// Wait slightly for the accordion to animate open before scrolling
		setTimeout(() => {
			const el = document.getElementById(`case-${groupId}-${caseId}`);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'center' });

				// Apply highlight visualization
				el.classList.add(
					'transition-all',
					'duration-500',
					'ring-4',
					'ring-primary-500',
					'scale-105',
					'z-10',
					'rounded-2xl'
				);

				// Remove highlight after a delay, but leave transition classes to fade out
				setTimeout(() => {
					el.classList.remove('ring-4', 'ring-primary-500', 'scale-105', 'z-10');

					// Clean up transition classes after fade out finishes
					setTimeout(() => {
						el.classList.remove('transition-all', 'duration-500', 'rounded-2xl');
					}, 500);
				}, 1500);
			}
		}, 300);
	}

	let filteredCases = $derived.by(() => {
		const results: { groupId: GroupId; caseId: CaseId }[] = [];

		const hasCornerPositionFilter = selectedCornerPositions.length > 0;
		const hasCornerOrientationFilter = selectedCornerOrientations.length > 0;
		const hasEdgePositionFilter = selectedEdgePositions.length > 0;
		const hasEdgeOrientationFilter = selectedEdgeOrientations.length > 0;
		const hasSpecificFilters =
			hasCornerPositionFilter ||
			hasCornerOrientationFilter ||
			hasEdgePositionFilter ||
			hasEdgeOrientationFilter;

		for (const groupId of GROUP_IDS) {
			if (selectedGroups.length > 0 && !selectedGroups.includes(groupId)) continue;

			const groupDef = GROUP_DEFINITIONS[groupId];
			const groupCases = new Set<CaseId>();
			groupDef.categories.forEach((cat) => cat.cases.forEach((c) => groupCases.add(c)));

			const groupAttributes = CASE_ATTRIBUTES[groupId] || {};

			for (const caseId of groupCases) {
				if (!hasSpecificFilters) {
					results.push({ groupId, caseId });
					continue;
				}

				const attrs = (groupAttributes as any)[caseId];
				if (!attrs) continue;

				if (hasCornerPositionFilter && !selectedCornerPositions.includes(attrs.cornerPosition))
					continue;
				if (
					hasCornerOrientationFilter &&
					!selectedCornerOrientations.includes(attrs.cornerOrientation)
				)
					continue;
				if (hasEdgePositionFilter && !selectedEdgePositions.includes(attrs.edgePosition)) continue;
				if (hasEdgeOrientationFilter && !selectedEdgeOrientations.includes(attrs.edgeOrientation))
					continue;

				results.push({ groupId, caseId });
			}
		}

		return results;
	});
</script>

<div class="p-4 space-y-6">
	<!-- Compact, responsive layout using Flexbox and Areas -->
	<div class="flex flex-wrap gap-4 items-start">
		<!-- Group Area -->
		<div
			class="flex flex-col gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
		>
			<span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Group</span>
			<div>
				<Button color="alternative" class="gap-2">
					Group
					{#if selectedGroups.length > 0}
						<Badge color="blue" class="ml-1 px-1.5 py-0.5">{selectedGroups.length}</Badge>
					{/if}
					<ChevronDown size={16} />
				</Button>
				<Dropdown class="w-64 overflow-hidden rounded-xl shadow-xl !border-none">
					<div class="flex max-h-[300px] flex-col overflow-y-auto p-2">
						<label
							class="flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 !border-none"
						>
							<Checkbox
								checked={selectedGroups.length === 0}
								onchange={() => (selectedGroups.length = 0)}
								class="me-2 cursor-pointer focus:ring-primary-500 dark:focus:ring-primary-600"
							/>
							<span class="text-base font-medium text-gray-900 dark:text-gray-100">Any</span>
						</label>
						<hr class="my-1 border-gray-200 dark:border-gray-600" />
						{#each groupOptions as option}
							<label
								class="flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 !border-none"
							>
								<Checkbox
									checked={selectedGroups.includes(option.value)}
									onchange={() => toggleSelection(selectedGroups, option.value)}
									class="me-2 cursor-pointer focus:ring-primary-500 dark:focus:ring-primary-600"
								/>
								<span class="text-base font-medium text-gray-900 dark:text-gray-100"
									>{option.name}</span
								>
							</label>
						{/each}
					</div>
				</Dropdown>
			</div>
		</div>

		<!-- Corner Area -->
		<div
			class="flex flex-col gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
		>
			<span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Corner</span>
			<div class="flex flex-wrap gap-2 md:gap-4">
				<!-- Corner Position Filter -->
				<div>
					<Button color="alternative" class="gap-2">
						Corner Position
						{#if selectedCornerPositions.length > 0}
							<Badge color="blue" class="ml-1 px-1.5 py-0.5">{selectedCornerPositions.length}</Badge
							>
						{/if}
						<ChevronDown size={16} />
					</Button>
					<Dropdown class="w-64 overflow-hidden rounded-xl shadow-xl !border-none">
						<div class="flex max-h-[300px] flex-col overflow-y-auto p-2">
							<label
								class="flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 !border-none"
							>
								<Checkbox
									checked={selectedCornerPositions.length === 0}
									onchange={() => (selectedCornerPositions.length = 0)}
									class="me-2 cursor-pointer focus:ring-primary-500 dark:focus:ring-primary-600"
								/>
								<span class="text-base font-medium text-gray-900 dark:text-gray-100">Any</span>
							</label>
							<hr class="my-1 border-gray-200 dark:border-gray-600" />
							{#each cornerPositionOptions as option}
								<label
									class="flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 !border-none"
								>
									<Checkbox
										checked={selectedCornerPositions.includes(option.value)}
										onchange={() => toggleSelection(selectedCornerPositions, option.value)}
										class="me-2 cursor-pointer focus:ring-primary-500 dark:focus:ring-primary-600"
									/>
									<span class="text-base font-medium text-gray-900 dark:text-gray-100"
										>{option.name}</span
									>
								</label>
							{/each}
						</div>
					</Dropdown>
				</div>

				<!-- Corner Orientation Filter -->
				<div>
					<Button color="alternative" class="gap-2">
						Corner Orientation
						{#if selectedCornerOrientations.length > 0}
							<Badge color="blue" class="ml-1 px-1.5 py-0.5"
								>{selectedCornerOrientations.length}</Badge
							>
						{/if}
						<ChevronDown size={16} />
					</Button>
					<Dropdown class="w-64 overflow-hidden rounded-xl shadow-xl !border-none">
						<div class="flex max-h-[300px] flex-col overflow-y-auto p-2">
							<label
								class="flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 !border-none"
							>
								<Checkbox
									checked={selectedCornerOrientations.length === 0}
									onchange={() => (selectedCornerOrientations.length = 0)}
									class="me-2 cursor-pointer focus:ring-primary-500 dark:focus:ring-primary-600"
								/>
								<span class="text-base font-medium text-gray-900 dark:text-gray-100">Any</span>
							</label>
							<hr class="my-1 border-gray-200 dark:border-gray-600" />
							{#each cornerOrientationOptions as option}
								<label
									class="flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 !border-none"
								>
									<Checkbox
										checked={selectedCornerOrientations.includes(option.value)}
										onchange={() => toggleSelection(selectedCornerOrientations, option.value)}
										class="me-2 cursor-pointer focus:ring-primary-500 dark:focus:ring-primary-600"
									/>
									<span class="text-base font-medium text-gray-900 dark:text-gray-100"
										>{option.name}</span
									>
								</label>
							{/each}
						</div>
					</Dropdown>
				</div>
			</div>
		</div>

		<!-- Edge Area -->
		<div
			class="flex flex-col gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
		>
			<span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Edge</span>
			<div class="flex flex-wrap gap-2 md:gap-4">
				<!-- Edge Position Filter -->
				<div>
					<Button color="alternative" class="gap-2">
						Edge Position
						{#if selectedEdgePositions.length > 0}
							<Badge color="blue" class="ml-1 px-1.5 py-0.5">{selectedEdgePositions.length}</Badge>
						{/if}
						<ChevronDown size={16} />
					</Button>
					<Dropdown class="w-64 overflow-hidden rounded-xl shadow-xl !border-none">
						<div class="flex max-h-[300px] flex-col overflow-y-auto p-2">
							<label
								class="flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 !border-none"
							>
								<Checkbox
									checked={selectedEdgePositions.length === 0}
									onchange={() => (selectedEdgePositions.length = 0)}
									class="me-2 cursor-pointer focus:ring-primary-500 dark:focus:ring-primary-600"
								/>
								<span class="text-base font-medium text-gray-900 dark:text-gray-100">Any</span>
							</label>
							<hr class="my-1 border-gray-200 dark:border-gray-600" />
							{#each edgePositionOptions as option}
								<label
									class="flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 !border-none"
								>
									<Checkbox
										checked={selectedEdgePositions.includes(option.value)}
										onchange={() => toggleSelection(selectedEdgePositions, option.value)}
										class="me-2 cursor-pointer focus:ring-primary-500 dark:focus:ring-primary-600"
									/>
									<span class="text-base font-medium text-gray-900 dark:text-gray-100"
										>{option.name}</span
									>
								</label>
							{/each}
						</div>
					</Dropdown>
				</div>

				<!-- Edge Orientation Filter -->
				<div>
					<Button color="alternative" class="gap-2">
						Edge Orientation
						{#if selectedEdgeOrientations.length > 0}
							<Badge color="blue" class="ml-1 px-1.5 py-0.5"
								>{selectedEdgeOrientations.length}</Badge
							>
						{/if}
						<ChevronDown size={16} />
					</Button>
					<Dropdown class="w-64 overflow-hidden rounded-xl shadow-xl !border-none">
						<div class="flex max-h-[300px] flex-col overflow-y-auto p-2">
							<label
								class="flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 !border-none"
							>
								<Checkbox
									checked={selectedEdgeOrientations.length === 0}
									onchange={() => (selectedEdgeOrientations.length = 0)}
									class="me-2 cursor-pointer focus:ring-primary-500 dark:focus:ring-primary-600"
								/>
								<span class="text-base font-medium text-gray-900 dark:text-gray-100">Any</span>
							</label>
							<hr class="my-1 border-gray-200 dark:border-gray-600" />
							{#each edgeOrientationOptions as option}
								<label
									class="flex cursor-pointer items-center rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 !border-none"
								>
									<Checkbox
										checked={selectedEdgeOrientations.includes(option.value)}
										onchange={() => toggleSelection(selectedEdgeOrientations, option.value)}
										class="me-2 cursor-pointer focus:ring-primary-500 dark:focus:ring-primary-600"
									/>
									<span class="text-base font-medium text-gray-900 dark:text-gray-100"
										>{option.name}</span
									>
								</label>
							{/each}
						</div>
					</Dropdown>
				</div>
			</div>
		</div>
	</div>

	<Hr class="mx-auto my-4 h-1 w-full rounded border-0 bg-gray-300 dark:bg-gray-600" />

	<!-- Filtered Cases -->
	<div class="mt-4">
		{#if filteredCases.length === 0}
			<div class="text-center text-gray-500 dark:text-gray-400">No cases match your filters.</div>
		{:else}
			<div class="flex flex-wrap gap-2">
				{#each filteredCases as { groupId, caseId } (`${groupId}-${caseId}`)}
					<div class="w-full sm:w-auto">
						<CaseCard
							{groupId}
							{caseId}
							showJumpButton={true}
							onJumpClick={() => handleJumpToCase(groupId, caseId)}
						/>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
