<script>
	// @ts-nocheck
	import { Article, Image } from '$lib/scripts/models/article.js';
	import Navbar from '$lib/Navbar.svelte';
	import Block from '$lib/blocks/old/Block.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	$: blocks = [];
	onMount(()=>goto("/simple"));
</script>

<Navbar title="Текстовый редактор">
	<svelte:fragment slot="navigation">
		<button class="btn btn-light text-dark" on:click={() => (blocks = [...blocks, new Article()])}>Абзац</button>
		<button
			class="btn btn-light text-dark"
			on:click={() =>
				(blocks = [
					...blocks,
					new Image('https://2.bp.blogspot.com/-Hm9fgd3Cxpg/Vi4BAQx29_I/AAAAAAAAISw/g8x2ETCl0iI/s1600/0C2A17601.jpg')
				])}>Картинка</button>
	</svelte:fragment>
</Navbar>
<div class="p-3">
	{#each blocks as block, index}
		{#if block.constructor.name == 'Article'}
			<Block {index} onRemove={e => blocks.splice(index, 1)}>
				<div class="form-control border-0" contenteditable="true" />
			</Block>
		{:else if block.constructor.name == 'Image'}
			<Block
				{index}
				onRemove={e => {
					blocks.splice(index, 1);
				}}>
				<img class="w-25" src={block.src} alt="" />
			</Block>
		{/if}
	{/each}
	<slot />
</div>
