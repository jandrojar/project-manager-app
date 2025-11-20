// Project.ts
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
