function hash(key, len) {
    var total = 0;
    var prime = 31;
    for (let i = 0; i < key.length; i++) {
        var char = key[i];
        total = (total * prime + (char.charCodeAt(0) - 96)) % len;
    }
    return total
}


class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        var total = 0;
        var prime = 31;
        for (let i = 0; i < key.length; i++) {
            var char = key[i];
            total = (total * prime + (char.charCodeAt(0) - 96)) % this.keyMap.length;
        }
        return total
    }

    set(key, value) {
        var index = this._hash(key)
        var newItem = [key, value];
        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push(newItem)
    }

    get(key) {
        var index = this._hash(key);
        var foundArr = this.keyMap[index];
        for (let i = 0; foundArr && i < foundArr.length; i++) {
            if (foundArr[i][0] == key) {
                return foundArr[i][1]
            }
        }
        return undefined;
    }

    keys() {
        var keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            const arr = this.keyMap[i];
            if (arr) {
                for (let j = 0; j < arr.length; j++) {
                    const keyVal = arr[j];
                    keys.push(keyVal[0])
                }
            }
        }
        return keys;
    }

    values() {
        var values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            const arr = this.keyMap[i];
            if (arr) {
                for (let j = 0; j < arr.length; j++) {
                    const keyVal = arr[j];
                    values.push(keyVal[1])
                }
            }

        }
        return values;
    }
}


var ht = new HashTable(4)

ht.set('red', '#FF0000')
ht.set('green', '#00FF00')
ht.set('blue', '#0000FF')
ht.set('yellow', '#FFFF00')
ht.set('orange', '#FFA500')