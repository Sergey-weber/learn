const router = require('express').Router();

const Posts = require('../model/Posts');

const verifyToken = require('./verifytoken');

router.post("/", verifyToken, async (req, res) => {
    const { title, content, author } = req.body;

    try {
        const newPost = new Posts({
            title,content,author
        });

        await newPost.save();

        return res.status(200).send(newPost);
    } catch(e) {
        res.status(400).send(e);
    };
});

router.get('/', async (req, res) => {
   const getPost = await Posts.find({}, (err, data) => { 
        return data;
    });

    return res.status(200).send(getPost);
});

module.exports = router;