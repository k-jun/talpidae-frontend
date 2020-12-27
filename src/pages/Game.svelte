<script>
	import Field from "../templates/Field.svelte";
	import FieldState from "../logics/field";
	import Controller from "../logics/controller";

	let field = new FieldState({ height: 20, width: 30 });
	let current_width = Math.floor(Math.random() * field.height);
	let current_height = Math.floor(Math.random() * field.width);
	let controller = new Controller({
		width: field.width,
		height: field.height,
		current_width,
		current_height,
	});
	let attributeFunctions = {
		goal: () => alert("game clear!!"),
		hint: () => {
			let distance = field.hint(controller.currentPosition());
			alert(`you are ${distance} blocks away from the goal`);
		},
	};
	field.setAttributeFunctions({ attributeFunctions });
</script>

<style>
	main {
		background: red;
	}
</style>

<main>
	<Field {field} {controller} />
</main>
