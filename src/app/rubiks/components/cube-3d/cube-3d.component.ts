import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubeRendererService } from '../../services/cube-renderer.service';

@Component({
  selector: 'app-cube-3d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cube-3d.component.html',
  styleUrls: ['./cube-3d.component.scss']
})
export class Cube3DComponent implements AfterViewInit {

  @Input() moves: string[] = [];

  @ViewChild('cubeContainer', { static: true }) cubeContainer!: ElementRef<HTMLDivElement>;

  constructor(private rendererService: CubeRendererService) {}

  ngAfterViewInit() {
    this.rendererService.init(this.cubeContainer.nativeElement);
  }

  autoPlay() {
    if(this.moves.length) {
      this.rendererService.playMoves(this.moves);
    }
  }

  nextStep() {
    if(this.moves.length) {
      const move = this.moves.shift()!;
      this.rendererService.playMoves([move]);
    }
  }

  resetCube() {
    this.rendererService.resetCube();
  }
}