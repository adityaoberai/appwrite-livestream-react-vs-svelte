<script>
	import { goto } from '$app/navigation';

	function addNote() {
		goto('/add');
	}
</script>

<header>
	<div id="header">
		<a href="/">
			<h1 id="logo">Notes</h1>
		</a>

		<button on:click={addNote}>Add</button>
	</div>
</header>
