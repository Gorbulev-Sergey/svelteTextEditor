class Tag {
	constructor(index = 0, html = null) {
		this.index = index;
		this.html = html;
	}
}

export class Article extends Tag {
	constructor(fontSize = null) {
		super();
		this.fontSize = fontSize;
	}
}

export class Image extends Tag {
	constructor(src = null) {
		super();
		this.src = src;
	}
}
