"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareHashFunction = void 0;
class squareHashFunction {
    hash(n) {
        return (n * n) % 5;
    }
}
exports.squareHashFunction = squareHashFunction;
