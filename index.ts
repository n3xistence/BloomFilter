import BloomFilter  from "./BloomFilter/BloomFilter";

import { HashFunction } from "./hashFunctions/HashFunction";
import { intHashFunction } from "./hashFunctions/intHashFunction";
import { maddHashFunction } from "./hashFunctions/maddHashFunction";
import { squareHashFunction } from "./hashFunctions/squareHashFunction";

let hashFuncs: HashFunction[] = [
  new intHashFunction(),
  new maddHashFunction(),
  new squareHashFunction()
]

let filter: BloomFilter = new BloomFilter(20, hashFuncs);

filter.insert(23);

console.log(filter.toString());

console.log(filter.contains(2));