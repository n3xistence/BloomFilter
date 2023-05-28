"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maddHashFunction = void 0;
class maddHashFunction {
    hash(n) {
        return ((n * 2) + 11) % 5;
    }
}
exports.maddHashFunction = maddHashFunction;
