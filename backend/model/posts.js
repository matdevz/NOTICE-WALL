module.exports = {
    posts: [
        {
            id: '1',
            title: 'My primary Post',
            description: 'Is my post using the Notice Wall',
        },
    ],

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
