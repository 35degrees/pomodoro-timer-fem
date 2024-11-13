<script>
	import { ColorIndex } from '../routes/state.svelte.js';
	import { colorIndex } from '../routes/stores.js';
	let { i } = $props();

	$inspect('color', colorIndex.value);
	let colorOptions = ['red', 'teal', 'violet'];
</script>

<div class="flex w-[90%] flex-row items-center justify-between py-2">
	<h3 class="font-tertiary text-left text-sm font-semibold uppercase tracking-[6px] text-black">
		Color
	</h3>
	<div class="flex flex-row gap-4">
		{#each colorOptions as color, i}
			<p
				onclick={() => colorIndex.update((v) => (v = i))}
				class="font-main {i === 0
					? 'bg-tomatoRed'
					: i === 1
						? 'bg-aquaBlue'
						: 'bg-violet'} relative flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[100%] text-[1.2rem] outline-none"
				class:selectedColor={$colorIndex === i}
			></p>
		{/each}
	</div>
</div>

<style>
	.selectedColor::before {
		content: '✔';
		height: 20px;
		width: 20px;
		position: absolute;
		top: 5%;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
