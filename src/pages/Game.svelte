<script>
	import Field from "../templates/Field.svelte";
	import FieldState from "../logics/field";
	import Controller from "../logics/controller";

	let field = new FieldState({ height: 250, width: 150 });
	let current_width = Math.floor(Math.random() * field.width);
	let current_height = Math.floor(Math.random() * field.height);
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
