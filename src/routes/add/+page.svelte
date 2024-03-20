<script>
	import { invalidateAll } from '$app/navigation';
	import { db } from '../../lib/databases';

	async function addNote(event) {
		event.preventDefault();

		const form = event.target;
		const formData = new FormData(form);

		const title = formData.get('title');
		const body = formData.get('body');

		await db.add(title, body);
		alert('Note added successfully');

		invalidateAll();
		form.reset();
	}
</script>

<div class="container">
	<div class="card card__body">
		<form on:submit={addNote}>
			<div class="form_field">
				<label for="title">Title:</label>
				<input type="text" name="title" placeholder="Enter title..." required />
			</div>

			<div class="form_field">
				<label for="body">Body:</label>
				<textarea name="body" placeholder="Note description" required></textarea>
			</div>

			<div class="form_field">
				<button type="submit">Add note</button>
			</div>
		</form>
	</div>
</div>
