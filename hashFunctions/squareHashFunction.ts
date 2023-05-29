import { HashFunction } from "./HashFunction";

export class squareHashFunction implements HashFunction{
  hash(n: number, len: number):number {
    return ((n + 1) * (n + 4)) % len;
  }
}