<script>
	import { fontIndex, startState } from './stores.js';
	import Nav from '../components/Nav.svelte';
	import Settings from '../components/Settings.svelte';
	import Timer from '../components/Timer.svelte';

	let settings = $state(false);
	$inspect(settings);
</script>

<div class="container mx-auto flex h-screen w-full flex-col items-center justify-center gap-10">
	<h2
		class="text-center {$fontIndex === 0
			? 'font-main'
			: $fontIndex === 1
				? 'font-secondary'
				: 'font-final'} text-3xl font-bold lowercase tracking-wide text-white"
	>
		pomodoro
	</h2>
	<Nav />
	<Timer />
	<div
		class=" mx-auto mt-8 cursor-pointer {$startState ? 'pointer-events-none' : ''} select-none"
		onclick={() => (settings = !settings)}
	>
		<img
			class="cog"
			src="https://raw.githubusercontent.com/35degrees/pomodoro-timer-fem/038130795744473a8656c6a06bf6ee3d9f8a70c5/src/lib/assets/icon-settings.svg"
			alt=""
		/>
	</div>
	{#if settings}
		<Settings {settings} {closeSettings} {applySettings} />
	{/if}
</div>

{#snippet applySettings()}
	<p class="placeholder: px-7 py-3 tracking-wider" onclick={() => (settings = !settings)}>Apply</p>
{/snippet}
{#snippet closeSettings()}
	<div onclick={() => (settings = !settings)}>𝗑</div>
{/snippet}

<style>
	.cog {
		transition: transform 0.12s ease-in-out;
		&:hover {
			transform: scale(1.14);
		}
	}
</style>
