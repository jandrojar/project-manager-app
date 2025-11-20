import { Context } from 'koa';
import { CreateProjectDTO, CreateProjectService } from '../../application/projects/createProjectService';

export class ProjectController {
  constructor(private readonly createProjectService: CreateProjectService) {}

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
}
