module.exports = {
    posts: [],

    getPosts() {
        return this.posts;
    },
    newPosts(title, description) {
        this.posts.push({ id: generateId(), title, description });
    },
};

function generateId() {
    return Math.floor(Math.random() * 100000000);
}
