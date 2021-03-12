const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const posts = [
    {
        title: '123',
        text: 'asdasfasfasf',
    },
    {
        title: '1A23',
        text: 'asdasfasfasf',
    },
    {
        title: '111123',
        text: 'asdasfasfasf',
    },
    {
        title: '123123',
        text: 'asdasfa2sfasf',
    },
];

app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    
    return res.send(posts[id]);
});

app.get('/posts', (req, res) => {
    return res.send(posts);
});

app.post('/posts', (req, res) => {
    const data = req.body;

    posts.push(data);

    console.log(data);

    return res.send(posts);
});

app.listen(9000, () => {
    console.log('State server');
});