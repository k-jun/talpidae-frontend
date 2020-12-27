<script>
	import Field from "../templates/Field.svelte";
	import FieldState from "../logics/field";
	import Controller from "../logics/controller";

	let attributeFunctions = {
		goal: () => alert("game clear!!"),
		hint: () => alert("hint time!"),
	};
	let field = new FieldState({ height: 10, width: 10, attributeFunctions });
	let current_width = Math.floor(Math.random() * field.height);
	let current_height = Math.floor(Math.random() * field.width);
	let controller = new Controller({
		width: field.width,
		height: field.height,
		current_width,
		current_height,
	});
</script>

<style>
	main {
		background: red;
	}
</style>

<main>
	<Field {field} {controller} />
</main>
