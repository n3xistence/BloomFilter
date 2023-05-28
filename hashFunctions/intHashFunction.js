"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intHashFunction = void 0;
class intHashFunction {
    hash(n, len) {
        return (n * 7) % len;
    }
}
exports.intHashFunction = intHashFunction;
