import { HashFunction } from "./HashFunction";

export class maddHashFunction implements HashFunction{
  hash(n: number):number {
    return ((n * 2) + 11) % 5;
  }
}