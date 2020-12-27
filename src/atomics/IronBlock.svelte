<script>
	import IronBlock1 from "./IronBlock1.svelte";
	import IronBlock2 from "./IronBlock2.svelte";
	import IronBlock3 from "./IronBlock3.svelte";
	let random = Math.floor(Math.random() * 3);
	export let px = "10px";
</script>

{#if random == 1}
	<IronBlock1 {px} />
{:else if random == 2}
	<IronBlock2 {px} />
{:else}
	<IronBlock3 {px} />
{/if}
