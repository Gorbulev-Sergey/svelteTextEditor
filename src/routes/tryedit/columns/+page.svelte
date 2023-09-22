<script>
	// @ts-nocheck
	import Offcanvas from '$lib/Offcanvas.svelte';
	class Board {
		constructor(columns = [new Column()], style = '', margin = 0, padding = 0) {
			this.columns = columns;
			this.style = style;
			this.margin = margin;
			this.padding = padding;
		}
	}
	class Column {
		constructor(content = '') {
			this.content = content;
		}
	}
	let boards = [];
	let selectedBoardAndColumn = { board: 0, column: 0 };
</script>

<div class="d-flex align-items-center gap-2">
	<button
		class="btn btn-sm btn-primary bg-primary bg-opacity-50 border-0 mb-3"
		on:click={() => {
			boards = [...boards, new Board()];
			console.log(boards);
		}}><i class="fa-solid fa-plus me-1" />доска</button>
</div>

{#each boards as board, i}
	<div class="d-flex align-items-start gap-2">
		<div class="flex-grow-1">
			<div class="row m-{board.margin} p-{board.padding}">
				{#each board.columns as column, y}
					<div class="col border p-3" on:click={() => ((selectedBoardAndColumn.board = i), (selectedBoardAndColumn.column = y))}>
						<div class="badge bg-dark text-light float-start">{y + 1}</div>
						<br />
						{@html column.content}
					</div>
				{/each}
			</div>
		</div>
		<div class="d-flex flex-column gap-1" style="min-width:20em">
			<!-- button top/down, copy, remove -->
			<div class="d-flex justify-content-between align-items-center gap-1">
				<div class="btn-group">
					<button
						class="btn btn-light"
						on:click={() => {
							if (i > 0) {
								boards.splice(i - 1, 0, boards.splice(i, 1)[0]);
								boards = [...boards];
							}
						}}><i class="fa-solid fa-arrow-up" /></button>
					<button
						class="btn btn-light"
						on:click={() => {
							if (i < boards.length - 1) {
								boards.splice(i + 1, 0, boards.splice(i, 1)[0]);
								boards = [...boards];
							}
						}}><i class="fa-solid fa-arrow-down" /></button>
				</div>
				<button
					class="btn btn-light"
					on:click={() => {
						boards = [...boards, Object.assign({}, board)];
					}}><i class="fa-solid fa-clone" /></button>
				<button
					class="btn btn-light text-danger"
					on:click={() => {
						boards = [...boards.filter(i => i != board)];
					}}><i class="fa-solid fa-xmark" /></button>
			</div>
			<!-- columns -->
			<div class="d-flex align-items-center gap-1">
				<div class="d-flex align-items-center gap-1">
					<div>колонок: {board.columns.length}</div>
					<div class="btn-group">
						<button
							class="btn btn-light"
							on:click={() => {
								if (board.columns.length < 12) board.columns = [...board.columns, new Column()];
							}}><i class="fa-solid fa-plus" /></button>
						<button
							class="btn btn-light"
							on:click={() => {
								if (board.columns.length > 1) board.columns = board.columns.slice(0, -1);
							}}><i class="fa-solid fa-minus" /></button>
					</div>
				</div>
			</div>
			<!-- style -->
			<div class="d-flex align-items-center gap-1">
				<div class="d-flex align-items-center gap-1">
					<div>style:</div>
					<input class="form-control" bind:value={board.style} />
				</div>
			</div>
			<!-- content -->
			<div class="d-flex align-items-center gap-1">
				<div class="d-flex align-items-center gap-1">
					<div>column {selectedBoardAndColumn.column + 1} content:</div>
					<div
						class="form-control"
						contenteditable="true"
						bind:innerText={boards[selectedBoardAndColumn.board].columns[selectedBoardAndColumn.column].content} />
				</div>
			</div>
		</div>
	</div>
{/each}
