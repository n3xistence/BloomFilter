import { HashFunction } from "../hashFunctions/HashFunction";
import BitArray  from "../BitArray/BitArray"

class BloomFilter{
  list: BitArray;
  hashFunctions: HashFunction[];

  constructor(len: number, hashFunctions: HashFunction[]) {
    this.hashFunctions = hashFunctions;

    this.list = new BitArray(len);

    for (let i = 0;i < len;i++){
      this.list.set(i, 0);
    }
  }

  set(index: number, value: number): void {
    this.list.set(index, value);
  }

  get(index: number): number{
    return this.list.at(index);
  }

  private getHashes(value: number): number[] {
    let hashes: number[] = [];
    for (let hashFunc of this.hashFunctions){
      hashes.push(hashFunc.hash(value));
    }
    return hashes;
  }

  contains(value: number): boolean {
    let hashes: number[] = this.getHashes(value);

    for (let hash of hashes){
      if (this.list.at(hash) === 1) continue;

      return false;
    }

    return true;
  }

  insert(value: number): void {
    let hashes: number[] = this.getHashes(value);

    for (let hash of hashes){
      this.set(hash, 1);
    }
  }

  toString(): string {
    return this.list.map((e: number) => `<${e}>`).join(", ")
  }
}

export default BloomFilter;