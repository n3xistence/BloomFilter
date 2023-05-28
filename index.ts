import BloomFilter  from "./BloomFilter";

import { HashFunction } from "./hashFunctions/HashFunction";
import { intHashFunction } from "./hashFunctions/intHashFunction";
import { maddHashFunction } from "./hashFunctions/maddHashFunction";
import { squareHashFunction } from "./hashFunctions/squareHashFunction";

let hashFuncs: HashFunction[] = [
  new intHashFunction(),
  new maddHashFunction(),
  new squareHashFunction()
]

let filter: BloomFilter = new BloomFilter(50, hashFuncs);


let then = performance.now();

for (let i = 0;i < 1_000_000;i++){
  filter.insert(Math.round(Math.random() * 100));
}

let now = performance.now();


console.log(`Insert Took ${now - then}ms to Compile.`)
then = now;

for (let i = 0;i < 1_000_000;i++){
  filter.contains(Math.round(Math.random() * 100));
}

now = performance.now();


console.log(`Search Took ${now - then}ms to Compile.`)