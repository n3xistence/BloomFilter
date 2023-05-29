"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BloomFilter_1 = __importDefault(require("./BloomFilter/BloomFilter"));
const intHashFunction_1 = require("./hashFunctions/intHashFunction");
const maddHashFunction_1 = require("./hashFunctions/maddHashFunction");
const squareHashFunction_1 = require("./hashFunctions/squareHashFunction");
let hashFuncs = [
    new intHashFunction_1.intHashFunction(),
    new maddHashFunction_1.maddHashFunction(),
    new squareHashFunction_1.squareHashFunction()
];
let filter = new BloomFilter_1.default(50000, hashFuncs);
let then = performance.now();
for (let i = 0; i < 1000000; i++) {
    filter.insert(Math.round(Math.random() * 100000));
}
let now = performance.now();
console.log(`Insert Took ${now - then}ms to Compile.`);
then = now;
for (let i = 0; i < 1000000; i++) {
    let val = Math.round(Math.random() * 100000);
    let contains = filter.contains(val);
    // console.log(`List ${contains ? "contains" : "does not contain"} ${val}`)
}
now = performance.now();
console.log(`Search Took ${now - then}ms to Compile.`);
console.log(filter.toString());
