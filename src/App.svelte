<script>
	import Game from './pages/Game.svelte'
	import Title from "./pages/Title.svelte"
	let page = ""
	function handleStart() {
		page = "game"
	}
</script>

<main>
	{#if page == "game"}
		<Game />
	{:else}
		<Title on:start={handleStart}/>
	{/if}
</main>

<style>
	main {
		text-align: center;
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
