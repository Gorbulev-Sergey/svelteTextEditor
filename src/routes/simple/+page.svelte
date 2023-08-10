<script>
	// @ts-nocheck
	import Title from '$lib/blocks/Title.svelte';
	import Tag from './Tag.svelte';
	class _Tag {
		constructor(_html = null, _class = null) {
			this._html = _html;
			this._class = _class;
		}
	}

	/**
	 * @type {any[]}
	 */
	$: content = new Array();
	$: titles = [1, 2, 3];
	let counter = 0;
</script>

<nav class="position-sticky d-flex align-items-center py-2 px-3 bg-body-tertiary">
	<b class="text-uppercase">Привет</b>
	<div class="flex-grow-1 d-flex align-items-center justify-content-end">
		<button
			class="btn btn-dark text-light"
			on:click={() => {
				counter += 1;
				content = [...content, new _Tag(`<div>Привет ${counter}</div>`, 'mb-3')];
			}}>
			<i class="fa-solid fa-plus" />
		</button>
	</div>
</nav>

<div class="container my-3">
	{#each content as item, i}
		<Tag
			tag={item}
			onTop={() => {
				if (i > 0) {
					content.splice(i - 1, 0, content.splice(i, 1)[0]);
					content = [...content];
				}
			}}
			onDown={() => {
				if (i < content.length - 1) {
					content.splice(i + 1, 0, content.splice(i, 1)[0]);
					content = [...content];
				}
			}}
			onRemove={() => {
				content.splice(i, 1);
				content = [...content];
			}} />
	{/each}
</div>

{#each titles as title, i}
	<Title
		title="Всем привет {i}"
		_class="text-end h1"
		onRemove={() => {
			titles.splice(i, 1);
			titles = [...titles];
		}} />
{/each}
