function Post(userId, title, body, id = null) {
    this.userId = userId;
    this.title = title;
    this.body = body;
    this.id = id;
}

const postHeaders = ['userId', 'id', 'title', 'body'];

function renderPostTable(posts, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(postHeaders, posts);
    containerElement.replaceChildren(table);
}