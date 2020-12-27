<script>
	export let px;
</script>

<style>
	.container {
		height: calc(var(--px) * 10);
		width: calc(var(--px) * 10);
		position: relative;
		border: 1px white solid;
	}
	.dot::before {
		content: "";
		position: absolute;
		top: calc(var(--px) * -1);
		left: calc(var(--px) * -1);

		width: var(--px);
		height: var(--px);
		background: transparent;
	}
</style>

<div class="container" style="--px: {px}">
	<div class="dot" />
</div>
