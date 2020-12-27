<script>
	import Background from "../templates/Background.svelte"
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleStart() {
		dispatch("start", {})
	}
</script>

<main>
	<Background />

	<h1>TALPIDAE</h1>

	<div>
		<button on:click={handleStart}>START</button>
		<button >CONFIG</button>
	</div>
</main>

<style>
	main {
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	@font-face {
		font-family: "arcadeclassic";
		src: url("../ttf/arcadeclassic.ttf");
	}
	h1 {
		font-family: "arcadeclassic";
		/* margin: auto; */
		color: white;
		font-size: 100px;
	}

	button {
		font-family: "arcadeclassic";
		background: transparent;
		margin: auto;
		color: white;
		font-size: 60px;
	}
</style>
