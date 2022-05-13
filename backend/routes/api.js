const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const posts = require('../model/posts');

router.get('/get', (req, res) => {
    res.json(JSON.stringify(posts.getPosts()));
});

router.post('/post', bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPosts(title, description);
    res.send('Post adicionado com sucesso');
});

module.exports = router;
