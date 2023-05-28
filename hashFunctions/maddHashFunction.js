"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maddHashFunction = void 0;
class maddHashFunction {
    hash(n, len) {
        return ((n * 2) + 11) % len;
    }
}
exports.maddHashFunction = maddHashFunction;
