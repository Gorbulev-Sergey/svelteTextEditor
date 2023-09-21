<script>
	// @ts-nocheck
	class Image {
		constructor(url = '', title = '', margin = 0, padding = 0, width = 25) {
			this.url = url;
			this.margin = margin;
			this.padding = padding;
			this.title = title;
			this.width = width;
		}
	}
	let images = [];
</script>

<div class="d-flex align-items-center gap-2">
	<button
		class="btn btn-sm btn-primary bg-primary bg-opacity-50 border-0 mb-3"
		on:click={() => {
			images = [...images, new Image()];
			console.log(images);
		}}><i class="fa-solid fa-plus me-1" />картинка</button>
</div>
{#if images.length > 0}
	{#each images as image, i}
		<div class="d-flex align-items-start gap-2">
			<div class="d-flex flex-column flex-grow-1">
				<img class="w-25 rounded-1 m-{image.margin} p-{image.padding} w-{image.width}" src={image.url} alt="" />
				{#if image.title}
					<div>{image.title}</div>
				{/if}
			</div>
			<div class="d-flex flex-column gap-1" style="min-width:20em">
				<!-- button top/down, copy, remove -->
				<div class="d-flex justify-content-between align-items-center gap-1">
					<div class="btn-group">
						<button
							class="btn btn-light"
							on:click={() => {
								if (i > 0) {
									images.splice(i - 1, 0, images.splice(i, 1)[0]);
									images = [...images];
								}
							}}><i class="fa-solid fa-arrow-up" /></button>
						<button
							class="btn btn-light"
							on:click={() => {
								if (i < images.length - 1) {
									images.splice(i + 1, 0, images.splice(i, 1)[0]);
									images = [...images];
								}
							}}><i class="fa-solid fa-arrow-down" /></button>
					</div>
					<button
						class="btn btn-light"
						on:click={() => {
							images = [...images, Object.assign({}, image)];
						}}><i class="fa-solid fa-clone" /></button>
					<button
						class="btn btn-light text-danger"
						on:click={() => {
							images = [...images.filter(i => i != image)];
						}}><i class="fa-solid fa-xmark" /></button>
				</div>
				<!-- url -->
				<div class="d-flex align-items-center gap-1">
					<div>url:</div>
					<div class="input-group">
						<input class="form-control" bind:value={image.url} />
						<button class="btn btn-light border" on:click={() => (image.url = '')}><i class="fa-solid fa-delete-left" /></button>
					</div>
				</div>
				<!-- title -->
				<div class="d-flex align-items-center gap-1">
					<div>заголовок:</div>
					<div class="input-group">
						<input class="form-control" bind:value={image.title} />
						<button class="btn btn-light border" on:click={() => (image.title = '')}
							><i class="fa-solid fa-delete-left" /></button>
					</div>
				</div>
				<!-- margin, padding -->
				<div class="d-flex align-items-center gap-1">
					<div class="d-flex align-items-center gap-1">
						<div>margin:</div>
						<input type="number" min="0" max="5" class="form-control" bind:value={image.margin} placeholder="margin" />
					</div>
					<div class="d-flex align-items-center gap-1">
						<div>padding:</div>
						<input type="number" min="0" max="5" class="form-control" bind:value={image.padding} placeholder="padding" />
					</div>
				</div>
				<!-- width -->
				<div class="d-flex align-items-center gap-1">
					<div class="d-flex align-items-center gap-1">
						<div>width:</div>
						<input type="number" min="25" max="100" step="25" class="form-control" bind:value={image.width} />
					</div>
				</div>
			</div>
		</div>
	{/each}
{/if}
