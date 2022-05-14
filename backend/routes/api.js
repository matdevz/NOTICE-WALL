const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('../model/posts');
const options = { origin: 'http://localhost:3001' };

router.use(cors(options));

router.get('/get', (req, res) => {
    res.json(JSON.stringify(posts.getPosts()));
});
router.post('/post', bodyParser.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    posts.newPosts(title, description);
    res.send();
});

module.exports = router;
