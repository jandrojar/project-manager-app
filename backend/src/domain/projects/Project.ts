/**
 * Project domain entity
 */
export interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  isArchived: boolean;
}

/**
 * Project repository interface 
 */
export interface ProjectRepository {
  save(project: Project): Promise<Project>; 

  getAll(): Promise <Project[]>;
}