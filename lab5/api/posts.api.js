const Router =  require('@koa/router');
const uuid = require('uuid');

let posts = new Map();

let createPost = (obj) => {
    let post = {
        id : uuid.v4(),
        date : new Date(),
        name : obj.name,
        description : obj.description
    };
    posts.set(post.id);
    return post;
};

let getPosts = () => {
    return [...posts.values];
};

let getPost = (id) => {
    return posts.get(id);
};

module.exports = {
    getPost,
    createPost,
    getPosts
};
