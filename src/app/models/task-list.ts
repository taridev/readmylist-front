import { Task } from './task';

export class TaskList {
    id: number;
    title: string;
    creationDate: Date;
    tasks: Task[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
