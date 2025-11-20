import { Project } from "../../domain/projects/Project";

// DTOs (Data Transfer Objects)
export interface CreateProjectDTO {
  name: string;
  description?: string;
}

// Repositories
export interface ProjectRepository {
  save(project: Project): Promise<Project>; 
}

/*
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