import { HashFunction } from "./HashFunction";

export class intHashFunction implements HashFunction{
  hash(n: number, len: number):number {
    return (n * 7) % len;
  }
}