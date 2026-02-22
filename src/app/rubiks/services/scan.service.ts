import { Injectable } from '@angular/core';
import { CubeState } from '../models/cube-state.model';

@Injectable({ providedIn: 'root' })
export class ScanService {

  extractColors(canvas: HTMLCanvasElement): string[][] {

    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    const width = canvas.width;
    const height = canvas.height;

    const grid: string[][] = [];

    const stepX = width / 3;
    const stepY = height / 3;

    for (let row = 0; row < 3; row++) {
      const rowColors: string[] = [];

      for (let col = 0; col < 3; col++) {

        const x = Math.floor(col * stepX + stepX / 2);
        const y = Math.floor(row * stepY + stepY / 2);

        const pixel = ctx.getImageData(x, y, 1, 1).data;

        rowColors.push(this.detectColor(pixel));
      }

      grid.push(rowColors);
    }

    return grid;
  }

  detectColor(pixel: Uint8ClampedArray): string {
    const [r,g,b] = pixel;

    if (r > 200 && g > 200 && b > 200) return 'W';
    if (r > 200 && g < 100 && b < 100) return 'R';
    if (r < 100 && g > 200 && b < 100) return 'G';
    if (r > 200 && g > 200 && b < 100) return 'Y';
    if (r > 200 && g > 100 && g < 200 && b < 100) return 'O';
    if (b > 150) return 'B';

    return 'W';
  }

  mapColor(letter: string): string {
    const map: any = {
      W: 'white',
      R: 'red',
      G: 'green',
      Y: 'yellow',
      O: 'orange',
      B: 'blue'
    };
    return map[letter];
  }

   validateCube(cubeState: Partial<CubeState>): { valid: boolean, message?: string } {
  const allColors = Object.values(cubeState).flatMap(face => face ? face.split('') : []);
  
  const colorCounts: Record<string, number> = { W:0,R:0,G:0,Y:0,O:0,B:0 };

  allColors.forEach(c => {
    if(colorCounts[c] !== undefined) colorCounts[c]++;
  });

  for(const color in colorCounts) {
    if(colorCounts[color] !== 9) {
      return { valid:false, message:`Color ${color} count is ${colorCounts[color]}, should be 9` };
    }
  }

  return { valid:true };
}
}