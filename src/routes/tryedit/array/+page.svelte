<script>
	// @ts-nocheck
	let texts = [];
</script>

<button
	class="btn btn-primary bg-primary bg-opacity-50 border-0 mb-3"
	on:click={() => {
		texts = [...texts, ''];
		console.log(texts);
	}}>+</button>
{#if texts.length > 0}
	{#each texts as text, i}
		<div class="d-flex justify-content-between align-items-start gap-2">
			<div class="flex-grow-1 bg-light p-2 rounded-1 mb-2" contenteditable="true" bind:innerText={text} />
			<div class=" btn-group">
				<button
					class="btn btn-light"
					on:click={() => {
						if (i > 0) {
							texts.splice(i - 1, 0, texts.splice(i, 1)[0]);
							texts = [...texts];
						}
					}}><i class="fa-solid fa-arrow-up" /></button>
				<button
					class="btn btn-light"
					on:click={() => {
						if (i < texts.length - 1) {
							texts.splice(i + 1, 0, texts.splice(i, 1)[0]);
							texts = [...texts];
						}
					}}><i class="fa-solid fa-arrow-down" /></button>
			</div>
		</div>
	{/each}
{/if}
