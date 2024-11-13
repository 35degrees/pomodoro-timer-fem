<script>
	import {
		colorIndex,
		startState,
		navIndex,
		pomodoroMin,
		shortMin,
		longMin
	} from '../routes/stores.js';
	let { isPaused } = $props();
	const FULL_DASH_ARRAY = 283;
	let timePassed = 0;
	let TIME_LIMIT;

	let timeLeft = TIME_LIMIT;
	let timerInterval = null;

	$effect(() => {
		if ($startState) {
			TIME_LIMIT =
				$navIndex === 0 ? $pomodoroMin * 60 : $navIndex === 1 ? $shortMin * 60 : $longMin * 60;
			timerInterval = setInterval(() => {
				timePassed = timePassed + 1;
				timeLeft = TIME_LIMIT - timePassed;
				setCircleDasharray();

				if (timeLeft === 0) {
					onTimesUp();
				}
			}, 1000);
		}
	});

	$effect(() => {
		if (isPaused) {
			clearInterval(timerInterval);
		}
	});

	function onTimesUp() {
		clearInterval(timerInterval);
	}

	function calculateTimeFraction() {
		const rawTimeFraction = timeLeft / TIME_LIMIT;
		return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
	}

	function setCircleDasharray() {
		const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
		document
			.getElementById('base-timer-path-remaining')
			.setAttribute('stroke-dasharray', circleDasharray);
	}
</script>

<div class="base-timer">
	<svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
		<g class="base-timer__circle">
			<path
				id="base-timer-path-remaining"
				stroke-dasharray="283"
				class="base-timer__path-remaining"
				color={$colorIndex === 0
					? 'hsl(0,91%,71%)'
					: $colorIndex === 1
						? 'hsl(182,91%,71%)'
						: 'hsl(284,89%,74%)'}
				d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
			></path>
		</g>
	</svg>
</div>

<style>
	.base-timer {
		position: absolute;
		height: 340px;
		width: 340px;
		margin-left: 4px;
		pointer-events: none;
	}
	.base-timer__circle {
		fill: none;
		stroke: none;
	}
	.base-timer__path-remaining {
		/* Just as thick as the original ring */
		stroke-width: 3px;

		/* Rounds the line endings to create a seamless circle */
		stroke-linecap: round;

		/* Makes sure the animation starts at the top of the circle */
		transform: rotate(90deg);
		transform-origin: center;

		/* One second aligns with the speed of the countdown timer */
		transition: 1s linear all;

		/* Allows the ring to change color when the color value updates */
		stroke: currentColor;
	}
	.base-timer__svg {
		/* Flips the svg and makes the animation to move left-to-right */
		transform: scaleX(-1);
	}
</style>
