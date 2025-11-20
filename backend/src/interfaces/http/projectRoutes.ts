// projectRoutes.ts
import Router from '@koa/router';
import { ProjectController } from './projectController';
import { CreateProjectService } from '../../application/projects/createProjectService';
import { InMemoryProjectRepository } from '../../infrastructure/projects/InMemoryProjectRepository';

const router = new Router({
  prefix: '/projects'
});

// Dependency injection
const repo = new InMemoryProjectRepository();
const service = new CreateProjectService(repo);
const controller = new ProjectController(service);

router.post('/', async (ctx) => controller.create(ctx));

export default router;
