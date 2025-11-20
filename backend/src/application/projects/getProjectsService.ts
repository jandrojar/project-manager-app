import { ProjectRepository } from "../../domain/projects/Project";
import { Project } from "../../domain/projects/Project";

export class GetProjectsService {
  constructor(private readonly projectRepository: ProjectRepository) {} // dependency injection

  async execute(): Promise<Project[]> {
    return this.projectRepository.getAll();
  }
}