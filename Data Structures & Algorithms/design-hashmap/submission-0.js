class MyHashMap {

    constructor() {

        // store key-value pairs
        this.data = [];
    }

    put(key, value) {

        // search for existing key
        for (let i = 0; i < this.data.length; i++) {

            // key found
            if (this.data[i][0] === key) {

                // update value
                this.data[i][1] = value;

                return;
            }
        }

        // key not found -> add new pair
        this.data.push([key, value]);
    }

    get(key) {

        // search key
        for (let i = 0; i < this.data.length; i++) {

            if (this.data[i][0] === key) {

                // return value
                return this.data[i][1];
            }
        }

        // not found
        return -1;
    }

    remove(key) {

        for (let i = 0; i < this.data.length; i++) {

            if (this.data[i][0] === key) {

                // remove pair
                this.data.splice(i, 1);

                return;
            }
        }
    }
}