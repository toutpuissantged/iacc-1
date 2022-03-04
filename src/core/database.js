

class DataBase {
    /**
     * Database helpers to use localStorage as database
     * @param {string} name - name of database
     * @param {string} version - version of the datatbase
     * @param {number} size - maximum size of the database
     */
    constructor(name, version, size) {
        this.name = name;
        this.version = version;
        this.size = size;
        this.__init();
    }
    __init() {
        localStorage.setItem(this.name, JSON.stringify({
            name: this.name,
            version: this.version,
            size: this.size,
            data: {}
        }));
    }

    size_of(name=undefined) {
        if (name === undefined) {
            return JSON.parse(localStorage.getItem(this.name)).length;
        }
        else {
            return JSON.parse(localStorage.getItem(this.name)).data[name].length;
        }
        
    }

    set(key, value) {
        let data = JSON.parse(localStorage.getItem(this.name));
        data.data[key] = value;
        localStorage.setItem(this.name, JSON.stringify(data));
    }

    get(key) {
        let data = JSON.parse(localStorage.getItem(this.name));
        return data.data[key];
    }
}

export default DataBase;