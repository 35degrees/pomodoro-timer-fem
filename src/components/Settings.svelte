<script>
	import { fade } from 'svelte/transition';
	import { pomodoroMin, shortMin, longMin } from '../routes/stores.js';
	import Sound from './Sound.svelte';
	import Color from './Color.svelte';
	import Font from './Font.svelte';
	import Icon from '@iconify/svelte';
	let { settings, closeSettings, applySettings } = $props();
	let pomodoro = 25;

	function handlePomodoroUp() {
		$pomodoroMin++;
		pomodoroMin.update((v) => v++);
	}

	function handlePomodoroDown() {
		if ($pomodoroMin > 0) {
			$pomodoroMin--;
			pomodoroMin.update((v) => v--);
		} else {
			$pomodoroMin;
		}
	}

	function handleShortUp() {
		$shortMin++;
		shortMin.update((v) => v++);
	}

	function handleShortDown() {
		if ($shortMin > 0) {
			$shortMin--;
			shortMin.update((v) => v--);
		} else {
			$shortMin;
		}
	}

	function handleLongUp() {
		$longMin++;
		longMin.update((v) => v++);
	}

	function handleLongDown() {
		if ($longMin > 0) {
			$longMin--;
			longMin.update((v) => v--);
		} else {
			$longMin;
		}
	}
</script>

<div
	class="modal absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center"
	in:fade={{ duration: 225 }}
	out:fade={{ duration: 80 }}
>
	<div
		class="z-60 relative m-4 flex h-auto select-none flex-col items-center justify-center gap-3 rounded-lg bg-mediumGrey px-2 py-4 text-center text-3xl text-black sm:w-[390px] lg:w-[490px]"
	>
		<!-- HEADER  -->
		<div class="ml-4 flex w-full flex-row items-start justify-between px-4 py-4">
			<h2 class="mt-2 text-2xl font-semibold text-black">Settings</h2>
			<div class="color-mediumGrey w-[2rem] cursor-pointer bg-transparent opacity-40">
				{@render closeSettings()}
			</div>
		</div>

		<!-- LINE  -->
		<div class="h-[1px] w-[90%] bg-black opacity-20"></div>

		<!-- CATEGORIES -->
		<div class="flex w-[90%] flex-col gap-4 pb-2 text-center">
			<!-- TIME  -->
			<h3 class="font-tertiary text-left text-sm font-semibold uppercase tracking-[6px] text-black">
				TIME (minutes)
			</h3>
			<div class="flex flex-row items-center justify-between gap-6">
				<div class="flex flex-col items-start justify-start gap-1">
					<label for="pomodoro" class="text-sm lowercase opacity-40">Pomodoro</label>
					<div class="input-number">
						<input
							bind:value={$pomodoroMin}
							class="rounded-lg"
							type="number"
							id="pomodoro"
							min="0"
						/>
						<div class="input-number-actions">
							<div class="button up" onclick={handlePomodoroUp}>
								<img
									src="https://raw.githubusercontent.com/35degrees/pomodoro-timer-fem/038130795744473a8656c6a06bf6ee3d9f8a70c5/src/lib/assets/icon-arrow-up.svg"
									alt="up arrow"
								/>
							</div>
							<div class="button down" onclick={handlePomodoroDown}>
								<img
									src="https://raw.githubusercontent.com/35degrees/pomodoro-timer-fem/038130795744473a8656c6a06bf6ee3d9f8a70c5/src/lib/assets/icon-arrow-down.svg"
									alt="down arrow"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col items-start justify-start gap-1">
					<label for="short" class="text-sm lowercase opacity-40">Short Break</label>
					<div class="input-number">
						<input class="rounded-lg" type="number" id="short" min="0" bind:value={$shortMin} />
						<div class="input-number-actions">
							<div class="button up" onclick={handleShortUp}>
								<img
									src="https://raw.githubusercontent.com/35degrees/pomodoro-timer-fem/038130795744473a8656c6a06bf6ee3d9f8a70c5/src/lib/assets/icon-arrow-up.svg"
									alt="up arrow"
								/>
							</div>
							<div class="button down" onclick={handleShortDown}>
								<img
									src="https://raw.githubusercontent.com/35degrees/pomodoro-timer-fem/038130795744473a8656c6a06bf6ee3d9f8a70c5/src/lib/assets/icon-arrow-down.svg"
									alt="down arrow"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col items-start justify-start gap-1">
					<label for="long" class="text-sm lowercase opacity-40">long break</label>
					<div class="input-number">
						<input class="rounded-lg" type="number" id="long" min="0" bind:value={$longMin} />
						<div class="input-number-actions">
							<div class="button up" onclick={handleLongUp}>
								<img
									src="https://raw.githubusercontent.com/35degrees/pomodoro-timer-fem/038130795744473a8656c6a06bf6ee3d9f8a70c5/src/lib/assets/icon-arrow-up.svg"
									alt="up arrow"
								/>
							</div>
							<div class="button down" onclick={handleLongDown}>
								<img
									src="https://raw.githubusercontent.com/35degrees/pomodoro-timer-fem/038130795744473a8656c6a06bf6ee3d9f8a70c5/src/lib/assets/icon-arrow-down.svg"
									alt="down arrow"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- LINE  -->
		<div class="h-[1px] w-[90%] bg-black opacity-20"></div>

		<!-- FONT  -->
		<Font />

		<!-- LINE  -->
		<div class="h-[1px] w-[90%] bg-black opacity-20"></div>

		<!-- Color  -->
		<Color />

		<!-- LINE  -->
		<div class="h-[1px] w-[90%] bg-black opacity-20"></div>

		<!-- AUDIO  -->
		<Sound />

		<div
			class=" absolute -bottom-5 cursor-pointer rounded-full bg-tomatoRed text-center text-sm uppercase tracking-wider text-white shadow-lg"
		>
			{@render applySettings()}
		</div>
	</div>
</div>

<style>
	.modal {
		background-color: hsla(234, 39%, 14%, 0.857);
	}

	input {
		width: 100%;
		height: 32px;
		padding-left: 16px;
		vertical-align: center;
		font-size: 1.1rem;
		color: grey;
	}

	input::placeholder {
		font-size: 1.3rem;
		height: auto;
		padding-bottom: 12px;
	}
	.input-number {
		display: flex;
		align-items: flex-end;
		position: relative;
		width: 100%;
	}
	.input-number-actions {
		position: absolute;
		right: 4%;
		display: flex;
		flex-direction: column;
		gap: 1px;
		align-items: center;
		justify-content: center;
		margin-bottom: 0px;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		-moz-appearance: textfield;
	}
	input[type='number']:focus {
		outline: none;
	}
	.button {
		width: 25px;
		cursor: pointer;
		transition: transform 0.04s ease-out;
		padding: 4px;
	}
	.up:active {
		transform: translateY(-1.8px);
	}
	.down:active {
		transform: translateY(1.8px);
	}
</style>
