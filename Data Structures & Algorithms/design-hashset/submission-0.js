class MyHashSet {
    constructor() {
        this.data = [];
    }

    add(key) {
        if (!this.contains(key)) {
            this.data.push(key);
        }
    }

    remove(key) {
        const index = this.data.indexOf(key);

        if (index !== -1) {
            this.data.splice(index, 1);
        }
    }

    contains(key) {
        return this.data.indexOf(key) !== -1;
    }
}