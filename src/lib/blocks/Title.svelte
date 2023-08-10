<script>
	// @ts-nocheck
	import Block from './old/Block.svelte';

	export let i = 0;
	export let title = '';
	export let _class = '';
	export let onRemove = () => {};
</script>

<Block {onRemove}>
	<div class={_class} contenteditable="true" data-my="title">
		{title}
	</div>
</Block>
