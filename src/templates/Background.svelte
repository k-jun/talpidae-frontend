<script>
	import Block from "../atomics/Block.svelte"
	let blocks = []
	let n = 20
	for (let i = 0; i < n; i++) {
		let row = []
		for (let j = 0; j < n; j++) {
			row.push(Math.floor(Math.random() * Math.floor(3) + 1))
		}
		blocks.push(row)
	}
	
</script>

<main>
	{#each blocks as row}
		<div class="row">
			{#each row as b}
				<Block px={"10px"}/>
			{/each}
		</div>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;

		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		padding: auto;
	}
	.row {
		display: flex;
		flex-direction: row;
	}
</style>
