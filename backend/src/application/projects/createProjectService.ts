import { Project } from "../../domain/projects/Project";
import { ProjectRepository } from "../../domain/projects/Project";

/**
 * Input data required to create a new project
 */
export interface CreateProjectDTO {
  name: string;
  description?: string;
}


/**
 * Service responsible for creating a new Project
 */
export class CreateProjectService {
    constructor(private readonly projectRepository: ProjectRepository) {}

    async execute(data: CreateProjectDTO): Promise<Project> {
        const newProject: Project = {
            id: crypto.randomUUID(),
            name: data.name,
            description: data.description,
            createdAt: new Date(),
            updatedAt: new Date(),
            isArchived: false
        };

        return this.projectRepository.save(newProject);

    }    
}