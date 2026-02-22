import { Injectable } from '@angular/core';
// Changed from 'import * as Cube' to default import
import Cube from 'cubejs'; 
import { CubeState } from '../models/cube-state.model';

@Injectable({ providedIn: 'root' })
export class SolverService {

  constructor() {
    // Crucial: Must be called once before any solving
    Cube.initSolver();
  }

  solve(state: CubeState): string[] {
    const cubeString = state.U + state.R + state.F + state.D + state.L + state.B;

    // After setting esModuleInterop: true, 'Cube' refers to the class directly
    const cube = Cube.fromString(cubeString);

    const solution = cube.solve();
    return solution ? solution.trim().split(/\s+/) : [];
  }
}
