<script>
	import SoilBlock from "./SoilBlock.svelte";
	import MossBlock from "./MossBlock.svelte";
	import RockBlock from "./RockBlock.svelte";
	import IronBlock from "./IronBlock.svelte";
	import WhiteBlock from "./WhiteBlock.svelte";
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
{:else}
	<SoilBlock {px} />
{/if}
