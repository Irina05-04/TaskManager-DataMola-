class TaskCollection {
  get user() {
    return this.user;
  }

  set user(value) {
    this._user = value;
  }

  get tasks() {
    return this._tasks;
  }

  set tasks(value) {
    this._tasks = [...value];
  }

  constructor(tasks) {
    this._tasks = [...tasks];
    this._user = '';
  }

  add(name, description, assignee, status, priority, isPrivate) {
    if (!this._user || assignee !== this._user) return false;
    const newTask = new Task(
      name,
      description,
      assignee,
      status,
      priority,
      isPrivate,
    );
    if (Task.validate(newTask)) {
      this._tasks = [...this._tasks, newTask];
      return true;
    }
    return false;
  }

  addAll(tasks) {
    let noValidArray = [];
    tasks.forEach((el) => {
      if (
        !this.add(
          el.name,
          el.description,
          el.assignee,
          el.status,
          el.priority,
          el.isPrivate,
        )
      ) noValidArray = [...noValidArray, el];
    });
    return noValidArray;
  }

  clear() {
    this._tasks = [];
  }

  getPage(skip, top, filterConfig) {
    let array = [...this._tasks];
    if (filterConfig) {
      if (Object.hasOwn(filterConfig, 'assignee')) {
        array = array.filter((el) => el.assignee
          .toLowerCase()
          .includes(filterConfig.assignee.toLowerCase()));
      }
      if (Object.hasOwn(filterConfig, 'dateFrom')) {
        filterConfig.dateTo.setHours(0);
        filterConfig.dateTo.setMinutes(0);
        filterConfig.dateTo.setSeconds(1);
        array = array.filter((el) => el.createdAt > filterConfig.dateFrom);
      }
      if (Object.hasOwn(filterConfig, 'dateTo')) {
        filterConfig.dateTo.setHours(23);
        filterConfig.dateTo.setMinutes(59);
        filterConfig.dateTo.setSeconds(59);
        array = array.filter((el) => el.createdAt < filterConfig.dateTo);
      }
      if (Object.hasOwn(filterConfig, 'status')) {
        array = array.filter((el) => el.status === filterConfig.status);
      }
      if (Object.hasOwn(filterConfig, 'priority')) {
        array = array.filter((el) => el.priority === filterConfig.priority);
      }
      if (Object.hasOwn(filterConfig, 'isPrivate')) {
        array = array.filter((el) => el.isPrivate === filterConfig.isPrivate);
      }
      if (Object.hasOwn(filterConfig, 'description')) {
        array = array.filter((el) => el.description.includes(filterConfig.description));
      }
    }
    return array.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
      .slice(skip, top);
  }

  get(id) {
    return this._tasks.find((el) => el.id === id);
  }

  edit(id, name, description, assignee, status, priority, isPrivate) {
    let currentTask = this.get(id);
    if (!currentTask) throw new Error('task not found');
    if (!this._user || currentTask.assignee !== this._user) return false;
    currentTask = {
      ...currentTask,
      name: name || currentTask.name,
      description: description || currentTask.description,
      assignee: assignee || currentTask.assignee,
      status: status || currentTask.status,
      priority: priority || currentTask.priority,
      isPrivate: isPrivate !== undefined ? isPrivate : currentTask.isPrivate,
    };
    if (Task.validate(currentTask)) {
      this._tasks = this._tasks.map((n) => (n.id === currentTask.id ? currentTask : n));
      return true;
    }
    return false;
  }

  remove(id) {
    const currentTask = this.get(id);
    if (!this._user || currentTask.assignee !== this._user) return false;
    this._tasks = this._tasks.filter((el) => el.id !== id);
    return true;
  }

  addComment(id, text) {
    const currentTask = this.get(id);
    if (!text) return false;
    const newComment = new Comment(text, this._user);
    currentTask.comments = [...currentTask.comments, newComment];
    return true;
  }
}
