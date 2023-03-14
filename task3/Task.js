/* eslint-disable no-underscore-dangle */

class Task {
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

  constructor(name, description, assignee, status, priority, isPrivate) {
    this._id = `${new Date().toString()}task`;
    this.createdAt = new Date();
    this.name = name;
    this.description = description;
    this.assignee = assignee;
    this.status = status;
    this.priority = priority;
    this.isPrivate = isPrivate;
    this.comments = [];
  }

  static validate(task) {
    if (!task.id || typeof task.id !== 'string') return false;
    if (!task.name || typeof task.name !== 'string' || this.name.length > 100) return false;
    if (
      !task.description
      || typeof task.description !== 'string'
      || task.description > 280
    ) return false;
    if (!task.createdAt || !Date.parse(task.createdAt)) return false;
    if (!task.assignee) return false;
    if (
      !task.status
      || typeof task.status !== 'string'
      || task.status.search(/\b(To Do|In progress|Complete)\b/) === -1
    ) return false;
    if (
      !task.priority
      || typeof task.priority !== 'string'
      || task.priority.search(/\b(High|Medium|Low)\b/) === -1
    ) return false;
    if (task.isPrivate === null || typeof task.isPrivate !== 'boolean') return false;
    if (!Array.isArray(task.comments)) return false;
    return true;
  }
}
