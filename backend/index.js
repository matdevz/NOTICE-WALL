const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./model/posts');

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/get', (req, res) => {
    res.json(JSON.stringify(posts.getPosts()));
});

app.post('/post', bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPosts(title, description);
    res.send('Post adicionado com sucesso');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
