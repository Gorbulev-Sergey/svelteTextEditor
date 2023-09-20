<script>
	// @ts-nocheck
	import Block from './old/Block.svelte';

	export let i = 0;
	export let title = '';
	export let _class = '';
	export let onRemove = () => {};
	export let onTop = () => {};
	export let onDown = () => {};
</script>

<Block {onRemove} {onTop} {onDown}>
	<div class={_class} contenteditable="true" data-my="title">
		{title}
	</div>
</Block>
