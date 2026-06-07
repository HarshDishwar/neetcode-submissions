class MyHashSet {
    constructor() {
        this.data = []
    }


    add(key) {
        if(!this.contains(key)){
            this.data.push(key)
        }
    }

    remove(key) {
        if(this.data.indexOf(key) !== -1){
            this.data.splice(this.data.indexOf(key),1)
        }
    }

    contains(key) {
        return this.data.indexOf(key) !== -1  
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
