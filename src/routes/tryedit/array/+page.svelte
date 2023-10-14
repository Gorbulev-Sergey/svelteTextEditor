<script>
	// @ts-nocheck
	import Navbar from '$lib/Navbar.svelte';
	import Maket from '$lib/Maket.svelte';

	class Article {
		constructor(content = '', _class = '') {
			this.content = content;
			this._class = _class;
		}
	}

	let selected = null;
	let articles = [];
</script>

<Navbar title="Абзацы">
	<button
		class="btn btn-sm btn-primary bg-primary bg-opacity-50 border-0"
		on:click={() => {
			articles = [...articles, new Article('абзац')];
		}}><i class="fa-solid fa-plus me-1" />абзац</button>
	<nav slot="nav">
		{#if selected != null && articles.length > 0}
			<div class="btn-group btn-group-sm border-1">
				<button class="btn btn-dark article-light" on:click={() => (articles[selected]._class = 'text-start')}>Влево</button>
				<button class="btn btn-dark article-light" on:click={() => (articles[selected]._class = 'text-center')}>По центру</button>
				<button class="btn btn-dark article-light" on:click={() => (articles[selected]._class = 'text-end')}>Вправо</button>
			</div>
			<div class="btn-group btn-group-sm border-1">
				<button class="btn btn-dark article-light" on:click={() => (articles[selected]._class = 'h1')}>h1</button>
				<button class="btn btn-dark article-light" on:click={() => (articles[selected]._class = 'h2')}>h2</button>
				<button class="btn btn-dark article-light" on:click={() => (articles[selected]._class = 'h3')}>h3</button>
				<button class="btn btn-dark article-light" on:click={() => (articles[selected]._class = 'h4')}>h4</button>
				<button class="btn btn-dark article-light" on:click={() => (articles[selected]._class = 'h5')}>h5</button>
				<button class="btn btn-dark article-light" on:click={() => (articles[selected]._class = 'h6')}>h6</button>
				<button class="btn btn-dark article-light" on:click={() => (articles[selected]._class = '')}>div</button>
			</div>
		{/if}
	</nav>
</Navbar>
<Maket>
	{#if articles.length > 0}
		{#each articles as article, i}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="d-flex justify-content-between align-items-start gap-2" on:click={() => (selected = i)}>
				<div
					class="flex-grow-1 bg-light p-2 rounded-1 mb-2 {article._class}"
					contenteditable="true"
					bind:innerHTML={article.content} />
				<div class="btn-group">
					<button
						class="btn btn-light"
						on:click={() => {
							if (i > 0) {
								articles.splice(i - 1, 0, articles.splice(i, 1)[0]);
								articles = [...articles];
							}
						}}><i class="fa-solid fa-arrow-up" /></button>
					<button
						class="btn btn-light"
						on:click={() => {
							if (i < articles.length - 1) {
								articles.splice(i + 1, 0, articles.splice(i, 1)[0]);
								articles = [...articles];
							}
						}}>
						<i class="fa-solid fa-arrow-down" />
					</button>
					<button
						class="btn btn-light"
						on:click={() => {
							articles = [...articles, Object.assign({}, article)];
						}}><i class="fa-solid fa-clone" /></button>
					<button class="btn btn-light text-danger" on:click={() => (articles = articles.filter(t => t != article))}>
						<i class="fa-solid fa-xmark" />
					</button>
				</div>
			</div>
		{/each}
	{/if}
	<nav slot="nav">
		{#if selected != null}
			<div class="d-flex flex-column gap-2 p-3">
				<i class="fa-solid fa-code" />
				<div class="bg-white border p-2" contenteditable="true" bind:innerText={articles[selected].content}>
					content: {articles[selected].content}
				</div>
			</div>
		{/if}
	</nav>
</Maket>
