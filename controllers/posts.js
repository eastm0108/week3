const Posts = require('../models/posts');
const { HTTP_STATUS, ERROR_MESSAGE } = require('../constants/index');

const posts = {
    /** 新增單筆貼文
     * @param {*} res http response 物件
     * @param {*} post 貼文內容
     */
    async createOne({ res, post }) {
        try {
            if (post.content == '') {
                res.status(HTTP_STATUS.BAD_REQUEST).send({
                    status: 'false',
                    message: ERROR_MESSAGE.NOT_FOUND_ID_OR_DATA_ERROR,
                });
            } else {
                const newPost = await Posts.create({ ...post });
                res.status(HTTP_STATUS.SUCCESS).send({ status: 'success', data: newPost });
            }
        } catch (error) {
            res.status(HTTP_STATUS.BAD_REQUEST).send({
                status: 'false',
                message: ERROR_MESSAGE.NOT_FOUND_ID_OR_DATA_ERROR,
                error,
            });
        }
    },
    /** 找尋全部貼文
     * @param {*} res http response 物件
     */
    async findAll({ res }) {
        try {
            const posts = await Posts.find();
            res.status(HTTP_STATUS.SUCCESS).send({ status: 'success', data: posts });
        } catch (error) {
            res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({ status: 'false', message: error });
        }
    },
    /** 刪除全部貼文
     * @param {*} res http response 物件
     */
    async deleteAll({ res }) {
        try {
            await Posts.deleteMany({});
            res.status(HTTP_STATUS.SUCCESS).send({ status: 'success', data: [] });
        } catch (error) {
            res.status(HTTP_STATUS.BAD_REQUEST).send({
                status: 'false',
                message: ERROR_MESSAGE.NOT_FOUND_ID_OR_DATA_ERROR,
                error,
            });
        }
    },
    /** 刪除單筆貼文
     * @param {*} res http response 物件
     * @param {*} id 貼文 id
     */
    async deleteOne({ res, id }) {
        try {
            const result = await Posts.findByIdAndDelete(id);

            if (result) {
                res.status(HTTP_STATUS.SUCCESS).send({ status: 'success', data: result });
            } else {
                res.status(HTTP_STATUS.BAD_REQUEST).send({
                    status: 'false',
                    message: ERROR_MESSAGE.NOT_FOUND_ID_OR_DATA_ERROR,
                });
            }
        } catch (error) {
            res.status(HTTP_STATUS.BAD_REQUEST).send({
                status: 'false',
                message: ERROR_MESSAGE.NOT_FOUND_ID_OR_DATA_ERROR,
                error,
            });
        }
    },
    /** 更新單筆貼文
     * @param {*} res http response 物件
     * @param {*} id 貼文 id
     * @param {*} post 更新貼文內容
     */
    async updateOne({ res, id, post }) {
        if (post.hasOwnProperty('content') && post.content === '') {
            res.status(HTTP_STATUS.BAD_REQUEST).send({
                status: 'false',
                message: ERROR_MESSAGE.NOT_FOUND_ID_OR_DATA_ERROR,
            });
        } else {
            try {
                const result = await Posts.findByIdAndUpdate(id, { ...post });

                if (result) {
                    res.status(HTTP_STATUS.SUCCESS).send({ status: 'success', data: result });
                } else {
                    res.status(HTTP_STATUS.BAD_REQUEST).send({
                        status: 'false',
                        message: ERROR_MESSAGE.NOT_FOUND_ID_OR_DATA_ERROR,
                        error,
                    });
                }
            } catch (error) {
                res.status(HTTP_STATUS.BAD_REQUEST).send({
                    status: 'false',
                    message: ERROR_MESSAGE.NOT_FOUND_ID_OR_DATA_ERROR,
                    error,
                });
            }
        }
    },
};

module.exports = posts;
