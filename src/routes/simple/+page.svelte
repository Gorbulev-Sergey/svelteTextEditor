<script>
	import { goto } from '$app/navigation';

	// @ts-nocheck
	import Article from '$lib/blocks/Article.svelte';
	class _Tag {
		constructor(_html = null, _class = null) {
			this._html = _html;
			this._class = _class;
		}
	}

	/**
	 * @type {any[]}
	 */
	$: content = [];
	$: titles = [1, 2, 3];
	let counter = 0;

	let articleClass = 'mb-3 bg-opacity-25 p-3 rounded-1 w-100 shadow-sm';
</script>

<nav class="position-sticky d-flex align-items-center py-2 px-3 bg-primary-subtle shadow-sm rounded-bottom-1">
	<b class="text-uppercase">Привет</b>
	<div class="flex-grow-1 d-flex align-items-center justify-content-end gap-2">
		<button class="btn btn-primary bg-primary bg-opacity-75 border-0" on:click={() => goto('/tryedit')}
			>Пробуем contenteditable</button>
		<button
			class="btn btn-dark text-light"
			on:click={() => {
				titles = [...titles, 'суслики'];
			}}>
			<i class="fa-solid fa-plus" />
		</button>
	</div>
</nav>

<div class="container my-4">
	<Article text="Привет всем ребятам" _class={articleClass + ' bg-success'} h="1" />

	<!-- {#each content as item, i}
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
	{/each} -->

	{#each titles as title, i}
		<Article
			h={4}
			text="Всем привет {title}"
			_class={articleClass + ' bg-info'}
			onTop={() => {
				if (i > 0) {
					titles.splice(i - 1, 0, titles.splice(i, 1)[0]);
					titles = [...titles];
					console.log(titles);
				}
			}}
			onDown={() => {
				if (i < titles.length - 1) {
					titles.splice(i + 1, 0, titles.splice(i, 1)[0]);
					titles = [...titles];
				}
			}}
			onRemove={() => {
				titles.splice(i, 1);
				titles = [...titles];
			}} />
	{/each}
</div>
