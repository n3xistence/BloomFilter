export interface HashFunction{
  hash(n: number, len: number): number;
}