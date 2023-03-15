class Comment {
  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get createdAt() {
    return this._createdAt;
  }

  set createdAt(value) {
    this._createdAt = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    this._author = value;
  }

  constructor(text, user) {
    this._id = `${new Date().toString()}com`;
    this.createdAt = new Date();
    this.text = text;
    this._author = user;
  }

  static validate(comment) {
    if (!comment.id || typeof comment.id !== 'string') return false;
    if (!comment.text || typeof comment.text !== 'string' || comment.text.length > TEXT_LENGTH) return false;
    if (!comment.createdAt || !Date.parse(comment.createdAt)) return false;
    if (!comment.author || typeof comment.author !== 'string') return false;
    return true;
  }
}
