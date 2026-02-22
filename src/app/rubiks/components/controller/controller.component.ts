import { Component } from '@angular/core';
import { Cube3DComponent } from '../cube-3d/cube-3d.component';
import { ScannerComponent } from '../scanner/scanner.component';
import { SolverService } from '../../services/solver.service';
import { CubeState } from '../../models/cube-state.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controller',
  standalone: true,
  imports: [CommonModule, FormsModule, ScannerComponent, Cube3DComponent],
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent {

  scannedCube!: CubeState;
  solutionMoves: string[] = [];
  showCube = false;

  constructor(private solverService: SolverService) {}

  // Receive validated scanned cube
  onScanned(cubeState: Event) {
    this.scannedCube = (cubeState as CustomEvent).detail;
    this.solutionMoves = [];
    this.showCube = false;
  }

  // Solve the cube
  solveCube() {
    if(!this.scannedCube) return;
    this.solutionMoves = this.solverService.solve(this.scannedCube);
    this.showCube = true;
  }
}