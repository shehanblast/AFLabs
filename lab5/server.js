const Koa = require('koa');
const HomeRoutes = require('./routes/home.router');
const ApiRoutes = require('./api/posts.api');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// app.use(ctx => {
//     ctx.body = 'Hello World';
// });
app.use(bodyParser());

app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());

app.use(ApiRoutes.routes())
    .use(ApiRoutes.allowedMethods());

app.listen(3000);

console.log('Application is running on port 3000');

