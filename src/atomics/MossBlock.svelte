<script>
	import MossBlock1 from "./MossBlock1.svelte";
	import MossBlock2 from "./MossBlock2.svelte";
	import MossBlock3 from "./MossBlock3.svelte";
	let random = Math.floor(Math.random() * 3);
	export let px = "10px";
</script>

{#if random == 1}
	<MossBlock1 {px} />
{:else if random == 2}
	<MossBlock2 {px} />
{:else}
	<MossBlock3 {px} />
{/if}
