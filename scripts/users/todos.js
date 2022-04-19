function TODO(userId, title, completed, id = null) {
    this.userId = userId;
    this.title = title;
    this.completed = completed;
    this.id = id;
}

const todoHeaders = ['id', 'title', 'completed'];