<script>
	let code = '';

	function format() {
		code = code.trim().replaceAll('\n', '').replaceAll('><', '>\n<');
	}
</script>

<div class="d-flex flex-column">
	<div class="p-3" style="min-height: 50vh;">{@html code}</div>
	<div class="d-flex flex-column gap-2 p-3 bg-light">
		<div class="d-flex gap-1">
			<button class="btn btn-sm btn-outline-dark" on:click={() => format()}>форматировать</button>
			<button
				class="btn btn-sm btn-outline-dark"
				on:click={() => {
					for (let i = 0; i < 6; i++) {
						code = code + '<div>Привет</div>';
					}
				}}>добавить код</button>
		</div>
		<code class="border bg-white p-2" style="min-height: 40vh;" contenteditable="true" bind:innerText={code}>код</code>
	</div>
</div>
