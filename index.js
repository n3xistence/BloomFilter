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
let filter = new BloomFilter_1.default(20, hashFuncs);
filter.insert(23);
console.log(filter.toString());
console.log(filter.contains(2));
