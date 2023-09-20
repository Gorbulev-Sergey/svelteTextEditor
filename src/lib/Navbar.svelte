<script>
	export let title = '';
</script>

<div class="d-flex flex-column bg-primary-subtle position-sticky sticky-top shadow-sm rounded-bottom-1">
	<nav class="d-flex align-items-center mx-3 mt-1">
		<b class="text-uppercase py-2">{title}</b>
		<div class="flex-grow-1 d-flex align-items-center justify-content-end">
			<button class="btn btn-sm btn-light text-dark" title="Добавить блок"><i class="fa-solid fa-plus" /></button>
		</div>
	</nav>
	<div class="d-flex align-items-center gap-2 mx-3 mb-2">
		<slot name="navigation" />
	</div>
</div>
