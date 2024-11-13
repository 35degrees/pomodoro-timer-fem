<script>
	import { fly } from 'svelte/transition';
	import { fontIndex, startState } from '../routes/stores.js';
	import { MainIndex } from '../routes/state.svelte.js';
	import { slideIndex } from '../routes/stores.js';
	import { navIndex, pomodoroMin, shortMin, longMin, soundIndex } from '../routes/stores.js';
	import Line from './Line.svelte';
	let seconds = $state(0);

	// const getNavIndex = new MainIndex();
	// console.log('smoo', getNavIndex.value);

	let timer;
	let minutes = $state(0);
	let timerText = $state();
	let updatedTimer = $state(0);
	let isPaused = $state(false);
	let audio;

	console.log({ pomodoroMin });

	function handleStart() {
		timer = setInterval(updateTimer, 1000);
		startState.update((v) => (v = !v));
	}

	function updateTimer() {
		let colonIndex = timerText.textContent.indexOf(':');
		minutes = +timerText.textContent.slice(0, colonIndex);

		if (minutes === 0 && seconds === 0) {
			clearInterval(timer);

			if ($soundIndex === 0) {
				audio = new Audio('https://audio.jukehost.co.uk/4a9WbaYRffpuwhy25xafUkbaG8unW6oe');
			} else if ($soundIndex === 1) {
				audio = new Audio('https://audio.jukehost.co.uk/aJx4MU76qpCjIjRCTYzFHBCrXPHQbNDL');
			} else if ($soundIndex === 2) {
				audio = new Audio('https://audio.jukehost.co.uk/WT7CFfDn341rqtjWVNqXjbw5PZZ09Rg6');
			}

			audio.play();
			restartTimer();
		} else if (!isPaused) {
			if (seconds === 0) {
				minutes--;
				seconds = 59;
			} else {
				seconds--;
			}
		}
		timerText.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
	}

	function restartTimer() {
		startState.update((v) => (v = !v));
		clearInterval(timer);
		isPaused = false;
		minutes = $navIndex === 0 ? $pomodoroMin : $navIndex === 1 ? $shortMin : $longMin;
		seconds = 0;
		timerText.textContent = minutes + ':' + '0' + seconds;
	}
</script>

<div
	class="face container relative mt-4 flex h-[340px] w-[340px] flex-col items-center justify-center gap-4 rounded-full bg-darkBlue text-center font-main text-white"
>
	<Line {isPaused} />
	<!-- {i === 0
    ? 'font-main'
    : i === 1
      ? 'font-secondary'
      : 'font-final'} -->

	<div class="transition-container w-[78%] overflow-hidden">
		{#key $navIndex}
			<h1
				bind:this={timerText}
				class="time-text mt-6 select-none text-center text-8xl opacity-90 {$fontIndex === 0
					? 'font-main'
					: $fontIndex === 1
						? 'font-secondary'
						: 'font-final'} {$fontIndex === 2 ? 'text-[5rem]' : 'text-8xl'} "
				in:fly={{ x: $slideIndex === 1 ? 300 : -300, duration: 200, delay: 200 }}
				out:fly={{ x: $slideIndex === 1 ? -300 : 300, duration: 200 }}
			>
				{$navIndex === 0 ? $pomodoroMin : $navIndex === 1 ? $shortMin : $longMin}:{seconds < 10
					? '0' + seconds
					: seconds}
				<!-- {navIndex === 0
			? pomodoroMin.value
			: navIndex === 1
				? shortMin.value
				: longMin.value}:{seconds < 10 ? '0' + seconds : seconds} -->
			</h1>
		{/key}
	</div>

	<div
		class="{$fontIndex === 0
			? 'font-main'
			: $fontIndex === 1
				? 'font-secondary'
				: 'font-final'} baseline h-[40px] cursor-pointer select-none text-xl uppercase tracking-[8px]"
	>
		{#if $startState}
			<div class="flex flex-row items-center justify-around gap-7 text-[0.95rem] text-white">
				<p class="w-[112px] text-center" onclick={() => (isPaused = !isPaused)}>
					{isPaused ? 'Resume' : 'Pause'}
				</p>
				<p onclick={restartTimer}>Reset</p>
			</div>
		{:else}
			<p class="mb-2" onclick={handleStart}>Start</p>
		{/if}
	</div>
</div>

<style>
	.face::after {
		content: '';
		width: 390px;
		height: 390px;
		border-radius: 100%;
		z-index: -10;
		background-image: linear-gradient(
			to top left,
			hsla(235, 22%, 48%, 0.5) 0%,
			hsl(234, 39%, 14%) 70%
		);
		position: absolute;
		box-shadow: -1.5rem -1.7rem 60px -30px rgba(157, 147, 221, 0.3);
	}
	.transition-container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	.transition-container > * {
		grid-row: 1;
		grid-column: 1;
	}
	.time-text {
		color: #fff;

		text-shadow:
			0 0 3px #e9efafa5,
			0 0 5px #c7d28b95;
	}
</style>
