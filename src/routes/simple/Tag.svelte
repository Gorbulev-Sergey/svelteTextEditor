<script>
	class Tag {
		constructor(_html = null, _class = null) {
			/**
			 * @type {null|String}
			 */
			this._html = _html;
			/**
			 * @type {null|String}
			 */
			this._class = _class;
		}
	}
	export let tag = new Tag();
	export let onTop = () => {};
	export let onDown = () => {};
	export let onRemove = () => {};
</script>

<div class="d-flex gap-1 {tag._class}">
	<div class="flex-grow-1 form-control border-0" contenteditable="true">
		{@html tag._html}
	</div>
	<div class="dropdown">
		<button class="btn btn-dark bg-body-tertiary" data-bs-toggle="dropdown">
			<i class="fa-solid fa-ellipsis" />
		</button>
		<div class="dropdown-menu dropdown-menu-end p-0">
			<div class="d-flex flex-column gap-2 m-2">
				<div class="btn-group">
					<button class="btn btn-dark bg-body-tertiary" on:click={() => {}}>
						<i class="fa-solid fa-align-left" />
					</button>
					<button class="btn btn-dark bg-body-tertiary" on:click={() => {}}>
						<i class="fa-solid fa-align-center" />
					</button>
					<button class="btn btn-dark bg-body-tertiary" on:click={() => {}}>
						<i class="fa-solid fa-align-right" />
					</button>
					<button class="btn btn-dark bg-body-tertiary" on:click={() => {}}>
						<i class="fa-solid fa-align-justify" />
					</button>
				</div>
				<div class="btn-group">
					<button class="btn btn-dark bg-body-tertiary" on:click={() => {}}>h1</button>
					<button class="btn btn-dark bg-body-tertiary" on:click={() => {}}>h2</button>
					<button class="btn btn-dark bg-body-tertiary" on:click={() => {}}>h3</button>
					<button class="btn btn-dark bg-body-tertiary" on:click={() => {}}>h4</button>
					<button class="btn btn-dark bg-body-tertiary" on:click={() => {}}>h5</button>
					<button class="btn btn-dark bg-body-tertiary" on:click={() => {}}>h6</button>
				</div>
				<div class="d-flex justify-content-between align-items-center gap-1">
					<div class="btn-group">
						<button class="btn btn-dark bg-body-tertiary" on:click={() => onTop()}><i class="fa-solid fa-arrow-up" /></button>
						<button class="btn btn-dark bg-body-tertiary" on:click={() => onDown()}><i class="fa-solid fa-arrow-down" /></button>
					</div>
					<button class="btn btn-dark bg-body-tertiary" on:click={() => {}}><i class="fa-regular fa-copy" /></button>
					<button class="btn btn-dark bg-body-tertiary text-danger" on:click={() => onRemove()}>
						<i class="fa-solid fa-trash" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
