<script>
	export let px;
</script>

<style>
	.container {
		height: calc(var(--px) * 10);
		width: calc(var(--px) * 10);
		position: relative;
		border: 1px black solid;
	}
	.dot::before {
		content: "";
		position: absolute;
		top: calc(var(--px) * -1);
		left: calc(var(--px) * -1);

		width: var(--px);
		height: var(--px);
		background: transparent;

		box-shadow: calc(var(--px) * 1) calc(var(--px) * 1) 0 #4a271b,
			calc(var(--px) * 2) calc(var(--px) * 1) 0 #6d391e,
			calc(var(--px) * 3) calc(var(--px) * 1) 0 #8c4d2b,
			calc(var(--px) * 4) calc(var(--px) * 1) 0 #4a271b,
			calc(var(--px) * 5) calc(var(--px) * 1) 0 #6d391e,
			calc(var(--px) * 6) calc(var(--px) * 1) 0 #4a271b,
			calc(var(--px) * 7) calc(var(--px) * 1) 0 #4a271b,
			calc(var(--px) * 8) calc(var(--px) * 1) 0 #4a271b,
			calc(var(--px) * 9) calc(var(--px) * 1) 0 #4a271b,
			calc(var(--px) * 10) calc(var(--px) * 1) 0 #4a271b,
			calc(var(--px) * 1) calc(var(--px) * 2) 0 #6d391e,
			calc(var(--px) * 2) calc(var(--px) * 2) 0 #6d391e,
			calc(var(--px) * 3) calc(var(--px) * 2) 0 #6d391e,
			calc(var(--px) * 4) calc(var(--px) * 2) 0 #4a271b,
			calc(var(--px) * 5) calc(var(--px) * 2) 0 #4a271b,
			calc(var(--px) * 6) calc(var(--px) * 2) 0 #6d391e,
			calc(var(--px) * 7) calc(var(--px) * 2) 0 #8c4d2b,
			calc(var(--px) * 8) calc(var(--px) * 2) 0 #6d391e,
			calc(var(--px) * 9) calc(var(--px) * 2) 0 #8c4d2b,
			calc(var(--px) * 10) calc(var(--px) * 2) 0 #8c4d2b,
			calc(var(--px) * 1) calc(var(--px) * 3) 0 #8c4d2b,
			calc(var(--px) * 2) calc(var(--px) * 3) 0 #8c4d2b,
			calc(var(--px) * 3) calc(var(--px) * 3) 0 #8c4d2b,
			calc(var(--px) * 4) calc(var(--px) * 3) 0 #4a271b,
			calc(var(--px) * 5) calc(var(--px) * 3) 0 #6d391e,
			calc(var(--px) * 6) calc(var(--px) * 3) 0 #8c4d2b,
			calc(var(--px) * 7) calc(var(--px) * 3) 0 #4a271b,
			calc(var(--px) * 8) calc(var(--px) * 3) 0 #4a271b,
			calc(var(--px) * 9) calc(var(--px) * 3) 0 #4a271b,
			calc(var(--px) * 10) calc(var(--px) * 3) 0 #6d391e,
			calc(var(--px) * 1) calc(var(--px) * 4) 0 #8c4d2b,
			calc(var(--px) * 2) calc(var(--px) * 4) 0 #6d391e,
			calc(var(--px) * 3) calc(var(--px) * 4) 0 #8c4d2b,
			calc(var(--px) * 4) calc(var(--px) * 4) 0 #8c4d2b,
			calc(var(--px) * 5) calc(var(--px) * 4) 0 #4a271b,
			calc(var(--px) * 6) calc(var(--px) * 4) 0 #8c4d2b,
			calc(var(--px) * 7) calc(var(--px) * 4) 0 #4a271b,
			calc(var(--px) * 8) calc(var(--px) * 4) 0 #6d391e,
			calc(var(--px) * 9) calc(var(--px) * 4) 0 #4a271b,
			calc(var(--px) * 10) calc(var(--px) * 4) 0 #6d391e,
			calc(var(--px) * 1) calc(var(--px) * 5) 0 #6d391e,
			calc(var(--px) * 2) calc(var(--px) * 5) 0 #6d391e,
			calc(var(--px) * 3) calc(var(--px) * 5) 0 #6d391e,
			calc(var(--px) * 4) calc(var(--px) * 5) 0 #8c4d2b,
			calc(var(--px) * 5) calc(var(--px) * 5) 0 #6d391e,
			calc(var(--px) * 6) calc(var(--px) * 5) 0 #6d391e,
			calc(var(--px) * 7) calc(var(--px) * 5) 0 #8c4d2b,
			calc(var(--px) * 8) calc(var(--px) * 5) 0 #4a271b,
			calc(var(--px) * 9) calc(var(--px) * 5) 0 #8c4d2b,
			calc(var(--px) * 10) calc(var(--px) * 5) 0 #8c4d2b,
			calc(var(--px) * 1) calc(var(--px) * 6) 0 #8c4d2b,
			calc(var(--px) * 2) calc(var(--px) * 6) 0 #8c4d2b,
			calc(var(--px) * 3) calc(var(--px) * 6) 0 #4a271b,
			calc(var(--px) * 4) calc(var(--px) * 6) 0 #4a271b,
			calc(var(--px) * 5) calc(var(--px) * 6) 0 #6d391e,
			calc(var(--px) * 6) calc(var(--px) * 6) 0 #8c4d2b,
			calc(var(--px) * 7) calc(var(--px) * 6) 0 #6d391e,
			calc(var(--px) * 8) calc(var(--px) * 6) 0 #8c4d2b,
			calc(var(--px) * 9) calc(var(--px) * 6) 0 #4a271b,
			calc(var(--px) * 10) calc(var(--px) * 6) 0 #4a271b,
			calc(var(--px) * 1) calc(var(--px) * 7) 0 #4a271b,
			calc(var(--px) * 2) calc(var(--px) * 7) 0 #8c4d2b,
			calc(var(--px) * 3) calc(var(--px) * 7) 0 #4a271b,
			calc(var(--px) * 4) calc(var(--px) * 7) 0 #6d391e,
			calc(var(--px) * 5) calc(var(--px) * 7) 0 #8c4d2b,
			calc(var(--px) * 6) calc(var(--px) * 7) 0 #6d391e,
			calc(var(--px) * 7) calc(var(--px) * 7) 0 #8c4d2b,
			calc(var(--px) * 8) calc(var(--px) * 7) 0 #6d391e,
			calc(var(--px) * 9) calc(var(--px) * 7) 0 #6d391e,
			calc(var(--px) * 10) calc(var(--px) * 7) 0 #8c4d2b,
			calc(var(--px) * 1) calc(var(--px) * 8) 0 #4a271b,
			calc(var(--px) * 2) calc(var(--px) * 8) 0 #4a271b,
			calc(var(--px) * 3) calc(var(--px) * 8) 0 #6d391e,
			calc(var(--px) * 4) calc(var(--px) * 8) 0 #4a271b,
			calc(var(--px) * 5) calc(var(--px) * 8) 0 #4a271b,
			calc(var(--px) * 6) calc(var(--px) * 8) 0 #8c4d2b,
			calc(var(--px) * 7) calc(var(--px) * 8) 0 #6d391e,
			calc(var(--px) * 8) calc(var(--px) * 8) 0 #8c4d2b,
			calc(var(--px) * 9) calc(var(--px) * 8) 0 #4a271b,
			calc(var(--px) * 10) calc(var(--px) * 8) 0 #4a271b,
			calc(var(--px) * 1) calc(var(--px) * 9) 0 #6d391e,
			calc(var(--px) * 2) calc(var(--px) * 9) 0 #4a271b,
			calc(var(--px) * 3) calc(var(--px) * 9) 0 #4a271b,
			calc(var(--px) * 4) calc(var(--px) * 9) 0 #8c4d2b,
			calc(var(--px) * 5) calc(var(--px) * 9) 0 #4a271b,
			calc(var(--px) * 6) calc(var(--px) * 9) 0 #6d391e,
			calc(var(--px) * 7) calc(var(--px) * 9) 0 #8c4d2b,
			calc(var(--px) * 8) calc(var(--px) * 9) 0 #4a271b,
			calc(var(--px) * 9) calc(var(--px) * 9) 0 #6d391e,
			calc(var(--px) * 10) calc(var(--px) * 9) 0 #6d391e,
			calc(var(--px) * 1) calc(var(--px) * 10) 0 #6d391e,
			calc(var(--px) * 2) calc(var(--px) * 10) 0 #6d391e,
			calc(var(--px) * 3) calc(var(--px) * 10) 0 #4a271b,
			calc(var(--px) * 4) calc(var(--px) * 10) 0 #4a271b,
			calc(var(--px) * 5) calc(var(--px) * 10) 0 #4a271b,
			calc(var(--px) * 6) calc(var(--px) * 10) 0 #6d391e,
			calc(var(--px) * 7) calc(var(--px) * 10) 0 #6d391e,
			calc(var(--px) * 8) calc(var(--px) * 10) 0 #8c4d2b,
			calc(var(--px) * 9) calc(var(--px) * 10) 0 #6d391e,
			calc(var(--px) * 10) calc(var(--px) * 10) 0 #4a271b;
	}
</style>

<div class="container" style="--px: {px}">
	<div class="dot" />
</div>
