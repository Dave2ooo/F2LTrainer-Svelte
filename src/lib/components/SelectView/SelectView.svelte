<script lang="ts">
	import { Tabs, TabItem } from 'flowbite-svelte';
	import GroupComponent from '$lib/components/SelectView/GroupComponent.svelte';
	import FilterComponent from '$lib/components/SelectView/FilterComponent.svelte';
	import { GROUP_DEFINITIONS, GROUP_IDS, type GroupId } from '$lib/types/group';
	import { globalState } from '$lib/globalState.svelte';
	import { Funnel } from '@lucide/svelte';

	let selectedTab = $state(globalState.selectedGroup);

	$effect(() => {
		globalState.selectedGroup = selectedTab;
	});
</script>

<Tabs
	bind:selected={selectedTab as any}
	tabStyle="underline"
	class="items-end"
	classes={{
		content: 'p-0 bg-gray-50 rounded-lg dark:bg-gray-800 mt-0'
	}}
>
	{#each GROUP_IDS as groupId}
		<TabItem key={groupId}>
			{#snippet titleSlot()}
				<span class="text-base font-bold md:text-lg">{GROUP_DEFINITIONS[groupId].name}</span>
			{/snippet}
			<GroupComponent {groupId} />
		</TabItem>
	{/each}
	<TabItem key="filter">
		{#snippet titleSlot()}
			<span class="text-base font-bold md:text-lg whitespace-nowrap">
				<Funnel size={18} class="inline-block align-text-bottom mr-1" />
				<span class="hidden lg:inline">Filter Cases</span>
			</span>
		{/snippet}
		<FilterComponent
			onJumpToGroup={(groupId: GroupId) => {
				selectedTab = groupId;
			}}
		/>
	</TabItem>
</Tabs>
