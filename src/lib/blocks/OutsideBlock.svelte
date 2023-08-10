<script>
	export let _class = '';
</script>

<div class="d-flex align-items-start mb-1 gap-2">
	<div class="flex-grow-1 {_class}">
		<slot />
	</div>
	<div class="dropdown">
		<button class="btn btn-sm bg-light text-dark" data-bs-toggle="dropdown">
			<i class="fa-solid fa-ellipsis-vertical" />
		</button>
		<ul class="dropdown-menu">
			<slot name="nav" />
		</ul>
	</div>
</div>
