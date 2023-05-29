"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BitArray_1 = __importDefault(require("../BitArray/BitArray"));
class BloomFilter {
    constructor(len, hashFunctions) {
        this.hashFunctions = hashFunctions;
        this.list = new BitArray_1.default(len);
        for (let i = 0; i < len; i++) {
            this.list.set(i, 0);
        }
    }
    set(index, value) {
        this.list.set(index, value);
    }
    get(index) {
        return this.list.at(index);
    }
    getHashes(value) {
        let hashes = [];
        for (let hashFunc of this.hashFunctions) {
            hashes.push(hashFunc.hash(value, this.list.size()));
        }
        return hashes;
    }
    contains(value) {
        let hashes = this.getHashes(value);
        for (let hash of hashes) {
            if (this.list.at(hash) === 1)
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
    toString() {
        return this.list.map((e) => `<${e}>`).join(", ");
    }
}
exports.default = BloomFilter;
