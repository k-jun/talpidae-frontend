<script>
	import SoilBlock from "./SoilBlock.svelte";
	import MossBlock from "./MossBlock.svelte";
	import RockBlock from "./RockBlock.svelte";
	import IronBlock from "./IronBlock.svelte";
	import ArrowDownBlock from "./ArrowDownBlock.svelte";
	import ArrowUpBlock from "./ArrowUpBlock.svelte";
	import ArrowRightBlock from "./ArrowRightBlock.svelte";
	import ArrowLeftBlock from "./ArrowLeftBlock.svelte";
	import TreasureBlock from "./TreasureBlock.svelte";
	export let px = "10px";
	let random = Math.floor(Math.random() * 100);
</script>

{#if random < 50}
	<SoilBlock {px} />
{:else if random < 60}
	<RockBlock {px} />
{:else if random < 70}
	<MossBlock {px} />
{:else if random < 90}
	<IronBlock {px} />
{:else if random < 96}
	<ArrowDownBlock {px} />
{:else if random < 97}
	<ArrowUpBlock {px} />
{:else if random < 98}
	<ArrowRightBlock {px} />
{:else if random < 99}
	<ArrowLeftBlock {px} />
{:else if random < 100}
	<TreasureBlock {px} />
{:else}
	<SoilBlock {px} />
{/if}
