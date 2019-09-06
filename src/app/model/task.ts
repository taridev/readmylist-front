export class Task {
    id: number;
    title: string;
    creationDate: Date;
    dueDate: Date;
    done: boolean;
    priorize: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
