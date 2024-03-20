<script>
	export let data;

	const getDate = (date) => {
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

		const dayOfWeek = days[new Date(date).getDay()];
		const dayOfMonth = new Date(date).getDate();

		return [dayOfWeek, dayOfMonth];
	};
</script>

{#each data.notes as note}
	<a href="/note/{note.$id}">
		<div class="card note__preview">
			<div class="date-wrapper">
				<small>{getDate(note.$createdAt)[0]}</small>
				<strong>{getDate(note.$createdAt)[1]}</strong>
			</div>
			<div>{note.title}</div>
		</div>
	</a>
{/each}
