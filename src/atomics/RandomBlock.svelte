<script>
	import SoilBlock from "./SoilBlock.svelte";
	import MossBlock from "./MossBlock.svelte";
	import RockBlock from "./RockBlock.svelte";
	import IronBlock from "./IronBlock.svelte";
	import DownArrowBlock from "./DownArrowBlock.svelte";
	import UpArrowBlock from "./UpArrowBlock.svelte";
	import RightArrowBlock from "./RightArrowBlock.svelte";
	import LeftArrowBlock from "./LeftArrowBlock.svelte";
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
	<DownArrowBlock {px} />
{:else if random < 97}
	<UpArrowBlock {px} />
{:else if random < 98}
	<RightArrowBlock {px} />
{:else if random < 99}
	<LeftArrowBlock {px} />
{:else if random < 100}
	<TreasureBlock {px} />
{:else}
	<SoilBlock {px} />
{/if}
