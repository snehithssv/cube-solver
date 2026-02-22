import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({ providedIn: 'root' })
export class CubeRendererService {

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  private cubies: THREE.Mesh[] = [];
  private cubeGroup!: THREE.Group;

  private moveQueue: string[] = [];
  private isAnimating = false;

  private highlightMesh!: THREE.Mesh;
  private arrowHelper!: THREE.ArrowHelper;

  private colors = ['W','R','G','Y','O','B']; // Face mapping

  // Initialize Three.js scene inside given container
  init(container: HTMLElement) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    this.camera.position.z = 5;

    this.createCube();
    this.animate();
  }

  // Create 3x3x3 cubies for the cube
  private createCube() {
    this.cubies = [];
    this.cubeGroup = new THREE.Group();

    const faceColors: Record<string, number> = {
      U: 0xffffff,
      R: 0xff0000,
      F: 0x00ff00,
      D: 0xffff00,
      L: 0xffa500,
      B: 0x0000ff
    };

    for(let x=-1;x<=1;x++){
      for(let y=-1;y<=1;y++){
        for(let z=-1;z<=1;z++){
          const geometry = new THREE.BoxGeometry(0.9,0.9,0.9);
          const materials = [
            new THREE.MeshBasicMaterial({ color: faceColors['R'] }), // Right +X
            new THREE.MeshBasicMaterial({ color: faceColors['L'] }), // Left -X
            new THREE.MeshBasicMaterial({ color: faceColors['U'] }), // Up +Y
            new THREE.MeshBasicMaterial({ color: faceColors['D'] }), // Down -Y
            new THREE.MeshBasicMaterial({ color: faceColors['F'] }), // Front +Z
            new THREE.MeshBasicMaterial({ color: faceColors['B'] }), // Back -Z
          ];

          const cubie = new THREE.Mesh(geometry, materials);
          cubie.position.set(x, y, z);
          this.cubies.push(cubie);
          this.cubeGroup.add(cubie);
        }
      }
    }

    this.scene.add(this.cubeGroup);
  }

  // Render loop
  private animate = () => {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  };

  // Play a list of moves sequentially
  playMoves(moves: string[]) {
    if(!moves.length) return;
    this.moveQueue = [...moves];
    if(!this.isAnimating) this.executeNext();
  }

  // Execute next move in queue
  private executeNext() {
    if(!this.moveQueue.length) {
      this.isAnimating = false;
      return;
    }

    this.isAnimating = true;
    const move = this.moveQueue.shift()!;
    this.applyMove(move);
  }

  // Apply a single move with rotation animation
  applyMove(move: string) {
    const face = move[0];
    const prime = move.includes("'");
    const angle = (Math.PI / 2) * (prime ? -1 : 1);

    // Select cubies for this layer
    let layerCubies: THREE.Mesh[] = [];
    switch(face){
      case 'R': layerCubies = this.cubies.filter(c => c.position.x > 0.5); break;
      case 'L': layerCubies = this.cubies.filter(c => c.position.x < -0.5); break;
      case 'U': layerCubies = this.cubies.filter(c => c.position.y > 0.5); break;
      case 'D': layerCubies = this.cubies.filter(c => c.position.y < -0.5); break;
      case 'F': layerCubies = this.cubies.filter(c => c.position.z > 0.5); break;
      case 'B': layerCubies = this.cubies.filter(c => c.position.z < -0.5); break;
    }

    // Highlight layer & show arrow
    const axisMap: Record<string,[string, THREE.Vector3]> = {
      R:['x', new THREE.Vector3(1,0,0)],
      L:['x', new THREE.Vector3(1,0,0)],
      U:['y', new THREE.Vector3(0,1,0)],
      D:['y', new THREE.Vector3(0,1,0)],
      F:['z', new THREE.Vector3(0,0,1)],
      B:['z', new THREE.Vector3(0,0,1)]
    };

    const [axisChar, axisVec] = axisMap[face];
    const layerValue:number = {R:1,L:-1,U:1,D:-1,F:1,B:-1}[face] ?? 0;
    this.addFaceHighlight(axisChar as 'x'|'y'|'z', layerValue);
    this.showRotationArrow(axisVec, new THREE.Vector3(0,0,0), !prime);

    // Temporary group for rotation
    const tempGroup = new THREE.Group();
    layerCubies.forEach(c => {
      this.cubeGroup.remove(c);
      tempGroup.add(c);
    });
    this.scene.add(tempGroup);

    // Animate rotation
    const duration = 500; // ms
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      tempGroup.rotation.setFromVector3(axisVec.clone().multiplyScalar(angle * t));

      if(t < 1){
        requestAnimationFrame(animate);
      } else {
        // Reset cubies back to main group
        layerCubies.forEach(c => {
          c.position.applyAxisAngle(axisVec, angle);
          c.rotation.set(0,0,0);
          tempGroup.remove(c);
          this.cubeGroup.add(c);
        });
        this.scene.remove(tempGroup);
        this.scene.remove(this.highlightMesh);
        this.scene.remove(this.arrowHelper);
        // Next move
        this.executeNext();
      }
    };

    requestAnimationFrame(animate);
  }

  // Reset cube to initial state
  resetCube() {
    this.cubies.forEach(c => {
      c.position.set(
        Math.round(c.position.x),
        Math.round(c.position.y),
        Math.round(c.position.z)
      );
      c.rotation.set(0,0,0);
    });
    this.isAnimating = false;
    this.moveQueue = [];
    console.log('Cube reset');
  }

  // Highlight rotating face with semi-transparent plane
  private addFaceHighlight(axis: 'x'|'y'|'z', layerValue: number) {
    if(this.highlightMesh) this.scene.remove(this.highlightMesh);

    const size = 3.2;
    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      opacity: 0.3,
      transparent: true,
      side: THREE.DoubleSide
    });

    this.highlightMesh = new THREE.Mesh(geometry, material);

    switch(axis){
      case 'x': this.highlightMesh.position.set(layerValue,0,0); this.highlightMesh.rotation.set(0,Math.PI/2,0); break;
      case 'y': this.highlightMesh.position.set(0,layerValue,0); this.highlightMesh.rotation.set(-Math.PI/2,0,0); break;
      case 'z': this.highlightMesh.position.set(0,0,layerValue); break;
    }

    this.scene.add(this.highlightMesh);
  }

  // Show arrow indicating rotation direction
  private showRotationArrow(axisVec: THREE.Vector3, position: THREE.Vector3, clockwise: boolean) {
    if(this.arrowHelper) this.scene.remove(this.arrowHelper);

    const dir = axisVec.clone();
    if(!clockwise) dir.negate();

    const origin = position.clone();
    const length = 1.2;
    const hex = 0xff0000;

    this.arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex, 0.4, 0.2);
    this.scene.add(this.arrowHelper);
  }

}