import { HashFunction } from "./HashFunction";

export class intHashFunction implements HashFunction{
  hash(n: number):number {
    return (n * 4) % 5;
  }
}