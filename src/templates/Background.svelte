<script>
	import Block from "../atomics/Block.svelte";
	let blocks = [];
	let minv = 50;
	let px = "5px";
	let width = window.innerWidth / (5 * 10) -1;
	let height = window.innerHeight / (5 * 10);
	for (let i = 5; i <= 50; i++) {
		if (window.innerWidth % (i * 10) < minv) {
			minv = window.innerWidth % (i * 10);
			px = `${i}px`;
			width = window.innerWidth / (i * 10) -1;
			height = window.innerHeight / (i * 10);
		}
	}
	for (let i = 0; i < height; i++) {
		let row = [];
		for (let j = 0; j < width; j++) {
			row.push(Math.floor(Math.random() * Math.floor(3) + 1));
		}
		blocks.push(row);
	}
</script>

<style>
	main {
		display: flex;
		flex-direction: column;
		background: black;

		/* height: 100%; */
		position: absolute;
		top: 0;
		bottom: 0;
		padding: auto;
		z-index: -1;
	}
	.row {
		display: flex;
		flex-direction: row;
	}
	.block {
		flex: 1;
	}
</style>

<main>
	{#each blocks as row}
		<div class="row">
			{#each row as b}
				<div class="block">
					<Block {px} />
				</div>
			{/each}
		</div>
	{/each}
</main>
