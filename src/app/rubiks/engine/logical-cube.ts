import { CubeState } from '../models/cube-state.model';

export class LogicalCube {

  private state: CubeState;

  constructor(initialState: CubeState) {
    this.state = { ...initialState };
  }

  getState(): CubeState {
    return { ...this.state };
  }

  applyMove(move: string) {
    // For now stub
    console.log('Applying move:', move);

    // Later: implement real face rotation logic
  }

}