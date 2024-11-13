<script>
	import { fontIndex } from '../routes/stores.js';

	let fontOptions = ['Aa', 'Aa', 'Aa'];

	// let fontIndexValue = $state();
	// const unsubscribe = fontIndex.subscribe((v) => {
	// 	fontIndexValue = v;
	// });
	// onDestroy(unsubscribe);

	function handleClick(i) {
		fontIndex.update((v) => (v = i));
	}
</script>

<div class="flex w-[90%] flex-row items-center justify-between py-2">
	<h3 class="font-tertiary text-left text-sm font-semibold uppercase tracking-[6px] text-black">
		FONT
	</h3>
	<div class="flex flex-row gap-4">
		{#each fontOptions as font, i}
			<p
				onclick={() => fontIndex.update((v) => (v = i))}
				class="{i === 0
					? 'font-main'
					: i === 1
						? 'font-secondary'
						: 'font-final'} flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[100%] bg-lightGrey text-[1.2rem] outline-none"
				class:selectedFont={$fontIndex === i}
			>
				{font}
			</p>
		{/each}
	</div>
</div>

<style>
	.selectedFont {
		color: #fff;
		background: #000000bb;
	}
</style>
