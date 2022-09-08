class DB {
    constructor(dbName) {
        this.dbName = dbName;
    }

    getData() {
        const data = JSON.parse(localStorage.getItem(this.dbName));
        return data;
    }

    postData(newItem) {
        const items = JSON.parse(localStorage.getItem(this.dbName));
        items.push(newItem);
        localStorage.setItem(JSON.stringify(items));
    }

    putData(property, newData) {
        const items = JSON.parse(localStorage.getItem(this.dbName));
        
    }
}

export default DB;