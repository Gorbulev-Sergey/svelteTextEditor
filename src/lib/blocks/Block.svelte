<script>
	let _class = '';
	let justifyContent = 'justify-content-start';
	export let index = 0;
	/**
	 *
	 * @param {number} e
	 */
	export let onRemove = e => {};
</script>

<div class="{_class} d-flex align-items-start mb-1 gap-2">
	<div class="flex-grow-1 {justifyContent} d-flex">
		<slot />
	</div>
	<div class="dropdown">
		<button class="btn btn-sm bg-light text-dark" data-bs-toggle="dropdown">
			<i class="fa-solid fa-ellipsis-vertical" />
		</button>
		<ul class="dropdown-menu">
			<li>
				<button class="dropdown-item" on:click={() => (justifyContent = 'justify-content-start')}>
					<i class="fa-solid fa-align-left" />
				</button>
			</li>
			<li>
				<button class="dropdown-item" on:click={() => (justifyContent = 'justify-content-evenly')}>
					<i class="fa-solid fa-align-center" />
				</button>
			</li>
			<li>
				<button class="dropdown-item" on:click={() => (justifyContent = 'justify-content-end')}>
					<i class="fa-solid fa-align-right" />
				</button>
			</li>
			<li>
				<button class="dropdown-item" on:click={() => onRemove(index)}> Удалить </button>
			</li>
		</ul>
	</div>
</div>
