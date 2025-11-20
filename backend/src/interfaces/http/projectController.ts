import { Context } from 'koa';
import { CreateProjectDTO, CreateProjectService } from '../../application/projects/createProjectService';
import { GetProjectsService } from '../../application/projects/getProjectsService';

export class ProjectController {
  constructor(
    private readonly createProjectService: CreateProjectService,
    private readonly getProjectsService: GetProjectsService
  ) {}

  /**
   * Handle POST /projects
   */
  async create(ctx: Context) {
    const { name, description } = ctx.request.body as CreateProjectDTO;

    if (!name) {
      ctx.status = 400;
      ctx.body = { error: 'Name is required' };
      return;
    }

    const project = await this.createProjectService.execute({
      name,
      description
    });

    ctx.status = 201;
    ctx.body = project;
  }

  async getProjects(ctx: Context) {
    const projects = await this.getProjectsService.execute();

    if (projects.length === 0) {
      ctx.status = 404;
      ctx.body = { error: 'No projects found' };
    }

    ctx.status = 200;
    ctx.body = projects;
  }

}
