<script>
	export class Article {
		constructor(fontSize = null) {
			this.fontSize = fontSize;
		}
	}
	export const type = 'article';
	export let text = 'Привет';
	export let _class = '';
</script>

<div class="form-control {_class}" contenteditable="true" bind:textContent={text} />
