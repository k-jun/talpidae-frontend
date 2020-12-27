<script>
	import RockBlock1 from "./RockBlock1.svelte";
	import RockBlock2 from "./RockBlock2.svelte";
	import RockBlock3 from "./RockBlock3.svelte";
	let random = Math.floor(Math.random() * 3);
	export let px = "10px";
</script>

{#if random == 1}
	<RockBlock1 {px} />
{:else if random == 2}
	<RockBlock2 {px} />
{:else}
	<RockBlock3 {px} />
{/if}
