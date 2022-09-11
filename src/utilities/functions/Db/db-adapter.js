class DB {
    constructor(dbName) {
        this.dbName = dbName;
    }
    
    setValue(value) {
        localStorage.setItem(this.dbName, JSON.stringify(value));
    }

    getValue() {
        const allValues = JSON.parse(localStorage.getItem(this.dbName));
        return allValues;
    }
}

export default DB;