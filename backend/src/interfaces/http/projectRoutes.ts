// projectRoutes.ts
import Router from '@koa/router';
import { ProjectController } from './projectController';
import { CreateProjectService } from '../../application/projects/createProjectService';
import { GetProjectsService } from '../../application/projects/getProjectsService';
import { InMemoryProjectRepository } from '../../infrastructure/projects/InMemoryProjectRepository';

const router = new Router({
  prefix: '/projects'
});

// Dependency injection
const repo = new InMemoryProjectRepository();
const serviceCreate = new CreateProjectService(repo);
const serviceGet = new GetProjectsService(repo);
const controller = new ProjectController(serviceCreate, serviceGet);

router.post('/', async (ctx) => controller.create(ctx));
router.get('/', async (ctx) => controller.getProjects(ctx));

export default router;
