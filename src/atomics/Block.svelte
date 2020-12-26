<script>
	import Block1 from "./Block1.svelte";
	import Block2 from "./Block2.svelte";
	import Block3 from "./Block3.svelte";
	let random = Math.floor(Math.random() * 3);
	export let px = "10px";
</script>

{#if random == 1}
	<Block1 px={px} />
{:else if random == 2}
	<Block2 px={px}/>
{:else}
	<Block3 px={px}/>
{/if}
