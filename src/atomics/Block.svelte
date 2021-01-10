<script>
	import SoilBlock from "./SoilBlock.svelte";
	import MossBlock from "./MossBlock.svelte";
	import RockBlock from "./RockBlock.svelte";
	import IronBlock from "./IronBlock.svelte";
	import WhiteBlock from "./WhiteBlock.svelte";
	import ArrowLeftBlock from "./ArrowLeftBlock.svelte";
	import ArrowRightBlock from "./ArrowRightBlock.svelte";
	import ArrowUpBlock from "./ArrowUpBlock.svelte";
	import ArrowDownBlock from "./ArrowDownBlock.svelte";
	import TreasureBlock from "./TreasureBlock.svelte";

	export let px = "10px";
	export let skin = "soil";
</script>

{#if skin == 'soil'}
	<SoilBlock {px} />
{:else if skin == 'moss'}
	<MossBlock {px} />
{:else if skin == 'rock'}
	<RockBlock {px} />
{:else if skin == 'iron'}
	<IronBlock {px} />
{:else if skin == 'white'}
	<WhiteBlock {px} />
{:else if skin == 'arrow-left'}
	<ArrowLeftBlock {px} />
{:else if skin == 'arrow-right'}
	<ArrowRightBlock {px} />
{:else if skin == 'arrow-up'}
	<ArrowUpBlock {px} />
{:else if skin == 'arrow-down'}
	<ArrowDownBlock {px} />
{:else if skin == 'treasure'}
	<TreasureBlock {px} />
{:else}
	<SoilBlock {px} />
{/if}
