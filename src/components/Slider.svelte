<script>
	import { colorIndex } from '../routes/stores.js';
	let { slideLeft } = $props();
</script>

<span
	style="left: {slideLeft}px"
	class="slider -z-2 absolute mx-2 h-[72%] w-[125px] rounded-full duration-200 ease-in-out {$colorIndex ===
	0
		? 'bg-tomatoRed'
		: $colorIndex === 1
			? 'bg-aquaBlue'
			: 'bg-violet'} "
></span>
