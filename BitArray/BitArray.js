"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BitArray {
    constructor(len) {
        this.list = [];
        for (let i = 0; i < len; i++) {
            this.list.push(0);
        }
    }
    set(index, value) {
        this.list[index] = value;
    }
    at(index) {
        return this.list[index];
    }
    size() {
        return this.list.length;
    }
    map(func) {
        return this.list.map(func);
    }
}
exports.default = BitArray;
