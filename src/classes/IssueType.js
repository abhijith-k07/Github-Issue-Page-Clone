import { v4 as uuidv4 } from 'uuid';

export default class IssueType {
    id
    title
    description
    constructor({title, description, tags}) {
        this.title = title;
        this.description = description;
        this.id = this.generateId();
        this.tags = tags;
    }

    generateId() {
        return uuidv4();
    }
}