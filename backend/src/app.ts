// app.ts
import Koa from 'koa';
import Router from '@koa/router';
import projectRoutes from './interfaces/http/projectRoutes';
import bodyParser from 'koa-bodyparser';


const app = new Koa(); // Create a new instance of the Koa application
const router = new Router();

app.use(bodyParser());

/**
 * Health check endpoint
 */
router.get('/health', (ctx) => {
  ctx.body = { status: 'ok' };
});


app.use(router.routes()); // Mount the router to handle requests
app.use(projectRoutes.routes());
app.use(router.allowedMethods()); // Handle HTTP methods not defined in routes

export default app;
