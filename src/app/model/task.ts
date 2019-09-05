export class Task {
    id: number;
    title: string;
    creationDate: Date;
    dueDate: Date;
    done: boolean;
    prioritize: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
