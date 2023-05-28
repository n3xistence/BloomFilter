"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intHashFunction = void 0;
class intHashFunction {
    hash(n) {
        return (n * 4) % 5;
    }
}
exports.intHashFunction = intHashFunction;
