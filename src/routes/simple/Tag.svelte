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
	<nav class="d-flex align-items-center gap-1">
		<div class="btn-group">
			<button class="btn btn-dark bg-body-tertiary" on:click={() => onTop()}><i class="fa-solid fa-arrow-up" /></button>
			<button class="btn btn-dark bg-body-tertiary" on:click={() => onDown()}><i class="fa-solid fa-arrow-down" /></button>
		</div>
		<button class="btn btn-dark bg-body-tertiary text-danger" on:click={() => onRemove()}><i class="fa-solid fa-trash" /></button>
	</nav>
</div>
