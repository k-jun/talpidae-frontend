<script>
	import Block1 from "./Block1.svelte";
	import Block2 from "./Block2.svelte";
	import Block3 from "./Block3.svelte";
	import MossBlock from "./MossBlock.svelte";
	import PuddleBlock from "./PuddleBlock.svelte";
	import IronBlock from "./IronBlock.svelte";
	let random = Math.floor(Math.random() * 6);
	export let px = "10px";
</script>

{#if random == 1}
	<Block1 {px} />
{:else if random == 2}
	<Block2 {px} />
{:else if random == 3}
	<Block3 {px} />
{:else if random == 4}
	<MossBlock {px} />
{:else if random == 5}
	<PuddleBlock {px} />
{:else}
	<IronBlock {px} />
{/if}
