import { randomUUID } from "crypto";

export class Task {
    private id: string;
    private title: string;
    private description: string;
    private done: boolean;

    constructor({ title, description, done }: { title: string; description: string; done: boolean; }) {
        this.id = randomUUID().toString();
        this.title = title || 'task_' + this.id;
        this.description = description || '';
        this.done = done || false;
    }
}
