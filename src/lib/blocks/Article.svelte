<script>
	export let text = '';
	export let _class = '';
	export let h = 1;
	let textAlign = '';

	export let onRemove = () => {};
	export let onTop = () => {};
	export let onDown = () => {};
</script>

<div class="d-flex align-items-start gap-2">
	<div class="flex-grow-1 d-flex rounded-1">
		{#if h == 1}
			<h1 class="{_class} {textAlign} border-0" contenteditable="true" bind:innerText={text} />
		{:else if h == 2}
			<h2 class="{_class} {textAlign}  border-0" contenteditable="true" bind:innerText={text} />
		{:else if h == 3}
			<h3 class="{_class} {textAlign}  border-0" contenteditable="true" bind:innerText={text} />
		{:else if h == 4}
			<h4 class="{_class} {textAlign} border-0" contenteditable="true" bind:innerText={text} />
		{:else if h == 5}
			<h5 class="{_class} {textAlign}  border-0" contenteditable="true" bind:innerText={text} />
		{:else if h == 6}
			<h5 class="{_class} {textAlign}  border-0" contenteditable="true" bind:innerText={text} />
		{:else}
			<div class="{_class} {textAlign}  border-0" contenteditable="true" bind:innerText={text} />
		{/if}
	</div>
	<div class="dropdown">
		<button class="btn btn-dark" data-bs-toggle="dropdown">
			<i class="fa-solid fa-ellipsis" />
		</button>
		<div class="dropdown-menu dropdown-menu-end p-0 bg-light">
			<div class="d-flex flex-column gap-2 m-2">
				<div class="btn-group">
					<button
						class="btn btn-dark"
						on:click={() => {
							textAlign = 'text-start';
						}}>
						<i class="fa-solid fa-align-left" />
					</button>
					<button
						class="btn btn-dark"
						on:click={() => {
							textAlign = 'text-center';
						}}>
						<i class="fa-solid fa-align-center" />
					</button>
					<button
						class="btn btn-dark"
						on:click={() => {
							textAlign = 'text-end';
						}}>
						<i class="fa-solid fa-align-right" />
					</button>
					<button class="btn btn-dark" on:click={() => {}}>
						<i class="fa-solid fa-align-justify" />
					</button>
				</div>
				<div class="btn-group">
					<button
						class="btn btn-dark"
						on:click={() => {
							h = 1;
						}}>h1</button>
					<button
						class="btn btn-dark"
						on:click={() => {
							h = 2;
						}}>h2</button>
					<button
						class="btn btn-dark"
						on:click={() => {
							h = 3;
						}}>h3</button>
					<button
						class="btn btn-dark"
						on:click={() => {
							h = 4;
						}}>h4</button>
					<button
						class="btn btn-dark"
						on:click={() => {
							h = 5;
						}}>h5</button>
					<button
						class="btn btn-dark"
						on:click={() => {
							h = 6;
						}}>h6</button>
				</div>
				<div class="d-flex justify-content-between align-items-center gap-1">
					<div class="btn-group">
						<button class="btn btn-dark" on:click={onTop}><i class="fa-solid fa-arrow-up" /></button>
						<button class="btn btn-dark" on:click={onDown}><i class="fa-solid fa-arrow-down" /></button>
					</div>
					<button class="btn btn-dark" on:click={() => {}}><i class="fa-regular fa-copy" /></button>
					<button class="btn btn-dark text-danger" on:click={onRemove}>
						<i class="fa-solid fa-trash" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
