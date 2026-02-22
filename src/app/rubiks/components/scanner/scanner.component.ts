import {
  Component,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { ScanService } from '../../services/scan.service';
import { CubeState } from '../../models/cube-state.model';
import { CommonModule } from '@angular/common';

type FaceKey = 'U' | 'R' | 'F' | 'D' | 'L' | 'B';

@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [CommonModule],   
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {

  @ViewChild('video', { static: true })
  videoRef!: ElementRef<HTMLVideoElement>;

  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  facesOrder: FaceKey[] = ['U','R','F','D','L','B'];
  currentIndex = 0;

  detectedGrid: string[][] = [];
  cubeState: Partial<CubeState> = {};

  stream!: MediaStream;

   constructor(public scanService: ScanService) {}

  async ngAfterViewInit() {
    await this.startCamera();
  }

  async startCamera() {
    this.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });

    this.videoRef.nativeElement.srcObject = this.stream;
  }

  get currentFace(): FaceKey {
    return this.facesOrder[this.currentIndex];
  }

  capture() {
    const video = this.videoRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);

    this.detectedGrid = this.scanService.extractColors(canvas);
  }

  confirmFace() {
  this.cubeState[this.currentFace] =
      this.detectedGrid.flat().join('');

  this.currentIndex++;

  this.detectedGrid = [];

  if(this.currentIndex === 6) {
    // Validate
    const result = this.scanService.validateCube(this.cubeState);
    if(!result.valid){
      alert('Cube is invalid: ' + result.message);
      // Optionally let user edit faces
      this.currentIndex = 0; // start over or guide user
    } else {
      console.log('Cube scanned successfully:', this.cubeState);
    }
  }
  }

  editColor(row: number, col: number) {
    const colors = ['W','R','G','Y','O','B'];
    const current = this.detectedGrid[row][col];
    const next = colors[(colors.indexOf(current)+1) % colors.length];
    this.detectedGrid[row][col] = next;
  }

 highlightFace(face: string): string {
    const colors: Record<string, string> = { 
      'U': '#ffffff', 'R': '#ff0000', 'F': '#00ff00', 
      'D': '#ffff00', 'L': '#ffa500', 'B': '#0000ff' 
    };
    return this.currentFace === face ? colors[face] : '#444444';
  }

}

