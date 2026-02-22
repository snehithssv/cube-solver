
declare module 'cubejs' {
  class Cube {
    constructor();
    static initSolver(): void;
    static fromString(str: string): Cube; 
    solve(): string;
  }
  export default Cube;
}
