const Router =  require('@koa/router');
const uuid = require('uuid');

let post = new Map();

let createPost = (obj) => {
    let post = {
        id : uuid.v4(),
        date : new Date(),
        name : obj.name,
        description : obj.description
    };
    posts.set(post.id)
}

const router = new Router({
    prefix: '/posts'
});

router.get('/', ctx => {
    ctx.body = 'jjks';
});
router.post('/', ctx => {
    ctx.body = 'Hello World - post';
});

module.exports = router;

