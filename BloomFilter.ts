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
      let hashValue: number = (hashFunc.hash(value, this.list.length));
      hashes.push(hashValue);
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

  clear(): void {
    for (let i = 0;i < this.list.length;i++){
      this.list[i] = 0;
    }
  }

  toString(): string {
    return this.list.map(e => e == 1 ? `<\x1b[43m${e}\x1b[0m>` : `<${e}>`).join(", ")
  }
}

export default BloomFilter;