export default class Issue {

    constructor({ title, description }) {
        this.title = title;
        this.description = description;
        this.labels = [];
    }
}