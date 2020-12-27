<script>
	import SoilBlock1 from "./SoilBlock1.svelte";
	import SoilBlock2 from "./SoilBlock2.svelte";
	import SoilBlock3 from "./SoilBlock3.svelte";
	let random = Math.floor(Math.random() * 3);
	export let px = "10px";
</script>

{#if random == 1}
	<SoilBlock1 {px} />
{:else if random == 2}
	<SoilBlock2 {px} />
{:else}
	<SoilBlock3 {px} />
{/if}
