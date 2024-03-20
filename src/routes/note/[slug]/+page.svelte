<script>
	export let data;
</script>

<div class="container">
	<div class="card card__body">
		<h2>{data.note.title}</h2>
		<small>{new Date(data.note.$createdAt).toDateString()}</small>
		<p>{data.note.body}</p>
	</div>
</div>
