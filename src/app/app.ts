import { Component, signal } from '@angular/core';
import { ControllerComponent } from './rubiks/components/controller/controller.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    ControllerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cube-solver');
}
