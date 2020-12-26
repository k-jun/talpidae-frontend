<script>
	export let name;
	import Field from './pages/Field.svelte'
	import Title from "./pages/Title.svelte"
	let page = ""

</script>

<main>
	{#if page == "field"}
		<Field />
	{:else}
		<Title />
	{/if}
</main>

<style>
	main {
		text-align: center;
		/* padding: 1em; */
		max-width: 240px;
		margin: 0 auto;
		width: 100%;
		height: 100%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
