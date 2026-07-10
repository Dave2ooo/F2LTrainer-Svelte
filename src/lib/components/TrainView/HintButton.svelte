<script lang="ts">
	import type { HintAlgorithm } from '$lib/types/globalState';
	import { Pencil, RotateCcw } from '@lucide/svelte';
	import { Button, Tooltip } from 'flowbite-svelte';

	interface Props {
		alg: string;
		visible: boolean;
		hintCounter: number;
		hintMode: HintAlgorithm;
		onclick: () => void;
		onEditAlg: () => void;
		onReset?: () => void;
		resetDisabled?: boolean;
		// element used by the TwistyAlgViewer (parent can bind to this)
		algViewerContainer?: HTMLElement;
		// whether to display the alg viewer element
		showAlgViewer?: boolean;
	}

	let {
		alg,
		visible,
		hintCounter,
		hintMode,
		onclick,
		onEditAlg,
		onReset,
		resetDisabled = false,
		algViewerContainer = $bindable(),
		showAlgViewer
	}: Props = $props();

	// Compute the displayed algorithm based on hint mode and counter
	let displayedAlg = $derived.by(() => {
		if (!visible) return '';

		if (hintMode === 'always') {
			// Always show the full algorithm
			return alg;
		} else if (hintCounter === -1) {
			// Not clicked yet - show placeholder
			return '';
		} else if (hintMode === 'allAtOnce') {
			// Show full algorithm after first click
			return alg;
		} else if (hintMode === 'step') {
			// Show step-by-step
			const algList = alg.split(' ').filter((move) => move.trim() !== '');
			return algList.slice(0, hintCounter).join(' ');
		}
		return '';
	});

	let showPlaceholder = $derived(visible && hintCounter === -1 && hintMode !== 'always');
	let showAlgorithm = $derived(visible && displayedAlg !== '');

	// Tailwind classes - uses display-box utility from app.css and adds specific overrides
	const className =
		'display-box cursor-pointer text-xl md:text-2xl hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-2 focus:ring-primary-600 focus:outline-none';

	const actionButtonClass =
		'flex-shrink-0 rounded-full p-2 transition-all duration-200 focus:ring-0 focus:outline-none';

	let resetButtonColorClass = $derived(
		resetDisabled
			? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
			: 'text-primary-500 hover:bg-opacity-90 cursor-pointer'
	);

	// Show edit button when either algViewer or algorithm text is shown
	let showEditButton = $derived(showAlgViewer || showAlgorithm);
</script>

<!-- Container holds both the alg viewer element (used by TwistyAlgViewer) and the hint button UI -->
<div class="flex w-full flex-col items-center">
	<div class="relative flex max-w-full items-center justify-center gap-2">
		<div
			bind:this={algViewerContainer}
			style:display={showAlgViewer ? 'block' : 'none'}
			{onclick}
			role="button"
			tabindex="0"
			onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onclick()}
			class={className}
		></div>

		{#if visible}
			<div
				{onclick}
				role="button"
				tabindex="0"
				onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onclick()}
				class={className}
			>
				{#if showPlaceholder}
					<span class="text-xl text-theme-text md:text-2xl">Press to show hint</span>
				{:else if showAlgorithm}
					<span
						class="font-mono text-xl font-semibold tracking-wide whitespace-pre-wrap md:text-3xl"
					>
						{displayedAlg}
					</span>
				{/if}
			</div>
		{/if}

		<div class="flex flex-col gap-1">
			{#if showEditButton}
				<Button
					color={'none' as any}
					type="button"
					onclick={(e: MouseEvent) => {
						e.stopPropagation();
						onEditAlg();
					}}
					class={`${actionButtonClass} text-primary-500 hover:bg-opacity-90 cursor-pointer`}
					aria-label="Edit algorithm"
				>
					<Pencil class="size-6" strokeWidth={3} />
				</Button>
				<Tooltip placement="right">Edit Algorithm</Tooltip>
			{/if}

			{#if onReset}
				<Button
					color={'none' as any}
					type="button"
					onclick={(e: MouseEvent) => {
						e.stopPropagation();
						if (!resetDisabled) {
							onReset();
						}
					}}
					class={`${actionButtonClass} ${resetButtonColorClass}`}
					aria-label="Reset case"
					aria-disabled={resetDisabled}
				>
					<RotateCcw class="size-6" strokeWidth={3} />
				</Button>
				<Tooltip placement="right">Reset Case</Tooltip>
			{/if}
		</div>
	</div>
</div>

<!-- min-w-48 text-center font-mono text-2xl font-semibold md:text-3xl -->
