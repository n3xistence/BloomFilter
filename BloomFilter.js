"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BloomFilter {
    constructor(len, hashFunctions) {
        this.hashFunctions = hashFunctions;
        this.list = [];
        for (let i = 0; i < len; i++) {
            this.list.push(0);
        }
    }
    set(index, value) {
        this.list[index] = value;
    }
    get(index) {
        return this.list[index];
    }
    getHashes(value) {
        let hashes = [];
        for (let hashFunc of this.hashFunctions) {
            let hashValue = (hashFunc.hash(value, this.list.length));
            hashes.push(hashValue);
        }
        return hashes;
    }
    contains(value) {
        let hashes = this.getHashes(value);
        for (let hash of hashes) {
            if (this.list[hash] === 1)
                continue;
            return false;
        }
        return true;
    }
    insert(value) {
        let hashes = this.getHashes(value);
        for (let hash of hashes) {
            this.set(hash, 1);
        }
    }
    clear() {
        for (let i = 0; i < this.list.length; i++) {
            this.list[i] = 0;
        }
    }
    toString() {
        return this.list.map(e => e == 1 ? `<\x1b[43m${e}\x1b[0m>` : `<${e}>`).join(", ");
    }
}
exports.default = BloomFilter;
