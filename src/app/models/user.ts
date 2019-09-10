export class User {
    id: number;
    username: string;
    password: string;
    authdata?: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
