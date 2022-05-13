const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

let posts = [
    {
        id: '1',
        title: 'My primary Post',
        description: 'Is my post using the Notice Wall',
    },
];

app.get('/get', (req, res) => {
    res.json(JSON.stringify(posts));
});

app.post('/post', bodyParser.json(), (req, res) => {
    let id = generateId();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({ id, title, description });

    console.log(id);

    res.send('Post adicionado com sucesso');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

function generateId() {
    return Math.random().toString(36).substring(2);
}
