<script>
	import Field from "../templates/Field.svelte";
	import FieldState from "../logics/field";

	let attributeFunctions = {
		goal: () => alert("game clear!!"),
		hint: () => alert("hint time!"),
	};
	let field = new FieldState({ height: 10, width: 10, attributeFunctions });
</script>

<style>
	main {
		background: red;
	}
</style>

<main>
	<Field {field} />
</main>
