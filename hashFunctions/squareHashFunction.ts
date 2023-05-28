import { HashFunction } from "./HashFunction";

export class squareHashFunction implements HashFunction{
  hash(n: number):number {
    return (n * n) % 5;
  }
}