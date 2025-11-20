import { Project } from '../../domain/projects/Project';
import { ProjectRepository } from '../../application/projects/createProjectService';

/**
 * In-memory repository for development/testing
 */
export class InMemoryProjectRepository implements ProjectRepository {
  private projects: Project[] = [];

  async save(project: Project): Promise<Project> {
    this.projects.push(project);
    return project;
  }

  getAll(): Project[] {
    return this.projects;
  }
}
