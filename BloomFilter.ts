import { HashFunction } from "./hashFunctions/HashFunction";

class BloomFilter{
  list: number[];
  hashFunctions: HashFunction[];

  constructor(len: number, hashFunctions: HashFunction[]) {
    this.hashFunctions = hashFunctions;

    this.list = [];

    for (let i = 0;i < len;i++){
      this.list.push(0);
    }
  }

  set(index: number, value: number): void {
    this.list[index] = value;
  }

  get(index: number): number{
    return this.list[index];
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
      if (this.list[hash] === 1) continue;

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
    return this.list.map(e => `<${e}>`).join(", ")
  }
}

export default BloomFilter;