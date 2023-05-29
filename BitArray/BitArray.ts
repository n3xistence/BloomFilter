class BitArray {
  list: number[];

  constructor(len: number){
    this.list = [];

    for (let i = 0;i < len;i++){
      this.list.push(0)    
    }
  }

  set(index: number, value: number): void {
    this.list[index] = value;
  }

  at(index: number): number {
    return this.list[index];
  }

  size(): number {
    return this.list.length;
  }

  map(func: any): string[] {
    return this.list.map(func);
  }
}

export default BitArray;