<script>
	import { fontIndex, navIndex } from '../routes/stores.js';
	import { MainIndex } from '../routes/state.svelte.js';
	import { slideIndex, startState } from '../routes/stores.js';
	import { slide } from 'svelte/transition';

	import Slider from './Slider.svelte';
	const lengthOptions = ['pomodoro', 'short break', 'long break'];

	let myMainIndex = new MainIndex();
	let slideLeft = $derived($navIndex * 125);

	$inspect(myMainIndex.value);

	let slideArray = [];
	function handleClick(i) {
		navIndex.update((v) => (v = i));
		slideArray.unshift(i);
		slideArray.splice(2);
		if (slideArray[0] > slideArray[1]) {
			slideIndex.update((v) => (v = 1));
		} else {
			slideIndex.update((v) => (v = -1));
		}
	}
</script>

<nav id="nav">
	<div
		class="slider-mode relative flex flex-row items-center justify-between rounded-full bg-darkBlue px-2 py-2 {$startState
			? 'pointer-events-none'
			: ''}"
	>
		{#each lengthOptions as option, i}
			<p
				onclick={() => handleClick(i)}
				class="relative z-10 w-[125px] cursor-pointer select-none rounded-full px-5 py-2 text-center text-sm lowercase text-mediumGrey opacity-70 {$fontIndex ===
				0
					? 'font-main'
					: $fontIndex === 1
						? 'font-secondary'
						: 'font-final'} {$fontIndex === 2 ? 'text-[0.76rem]' : 'text-sm'} {$fontIndex === 1 &&
				i === 1
					? 'text-[0.8rem]'
					: 'text-sm'}"
				class:selectedItem={$navIndex === i}
			>
				{option}
			</p>
			<Slider {slideLeft} />
		{/each}
	</div>
</nav>

<style>
	.selectedItem {
		/* background-color: hsl(0, 91%, 71%); */
		color: hsl(234, 39%, 14%);
		opacity: 100%;
		font-weight: 600;
		transition: font-weight 0.25s ease-in-out;
	}
</style>
