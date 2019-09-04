/**
 * Modèle de tâches
 */

export class Task {
    id: number;
    title: string;
    creation_date: Date;
    due_date: Date;
    done: boolean;
    list_id: number;
    prioritize: boolean;
}