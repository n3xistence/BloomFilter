"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareHashFunction = void 0;
class squareHashFunction {
    hash(n, len) {
        return ((n + 1) * (n + 4)) % len;
    }
}
exports.squareHashFunction = squareHashFunction;
