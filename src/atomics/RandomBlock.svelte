<script>
	import SoilBlock from "./SoilBlock.svelte";
	import MossBlock from "./MossBlock.svelte";
	import RockBlock from "./RockBlock.svelte";
	import IronBlock from "./IronBlock.svelte";
    export let px = "10px";
    let random = Math.floor(Math.random() * 10);
    
</script>

{#if random < 5}
	<SoilBlock {px} />
{:else if random < 7}
	<MossBlock {px} />
{:else if random < 9}
	<RockBlock {px} />
{:else if random < 10}
	<IronBlock {px} />
{:else}
	<SoilBlock {px} />
{/if}
