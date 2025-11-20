// Task.ts
/**
 * Task status types
 */
export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

/**
 * Task priority types
 */
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';

/**
 * Task domain entity
 */
export interface Task {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
