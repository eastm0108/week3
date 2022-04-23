var express = require('express');
var router = express.Router();
const PostsControllers = require('../controllers/posts');

// 取得所有貼文
router.get('/', (req, res, next) => {
    PostsControllers.findAll({ res });
});

// 新增貼文
router.post('/', (req, res, next) => {
    const post = req.body;

    PostsControllers.createOne({ res, post });
});

// 修改指定貼文
router.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    const post = req.body;

    PostsControllers.updateOne({ res, id, post });
});

// 刪除全部貼文
router.delete('/', (req, res, next) => {
    PostsControllers.deleteAll({ res });
});

// 刪除指定貼文
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    PostsControllers.deleteOne({ res, id });
});

module.exports = router;
