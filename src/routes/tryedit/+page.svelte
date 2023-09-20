<script>
	let text = '';
</script>

{#if text !== ''}
	<div class="alert alert-info">{@html text}</div>
{/if}

<div class="bg-light p-2 rounded-1" contenteditable="true" bind:innerText={text} />
