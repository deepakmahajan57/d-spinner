import { Component } from '@angular/core';
import { DSpinnerService } from 'd-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd-spinner';
  
  spinnerTypes = [
    'simple-spinner',
    'inner-arc',
    'outer-arc',
    'twin-inner-arc',
    'twin-outer-arc',
    'inner-orbiting-dot',
    'outer-orbiting-dot',
    'inner-spiral',
    'dual-segment',
    'dotted-circular',
    'rotating-bar',
    'ring',
    'square-wave',
    'glowing-ring',
    'half-ring',
    'intersecting-ring',
    'balancing-shapes',
    'rotating-slice',
    'inner-fill-arc',
    'rolling-circle',
    'orbiting-dots',
    'dual-pulsating-dots',
    'expanding-dots',
    'rotating-double-square',
    'scattered-diamond',
    'pulsating-grid',
    'expanding-square',
    'tilted-bar',
    'bouncing-diamond',
    'intersecting-triangle',
    'rotating-triangle',
    'bouncing-square',
    'spin-with-bounce',
    'circle-inside-square',
    'vertical-bars-pulsation',
    'flipping-parallel-lines',
    'rising-bars-with-dot',
    'dashed-line-expansion',
    'balancing-capsule',
    'loading-bounce',
    'expanding-block',
    'arc-of-dots',
    'rotating-pie-shape',
    'circular-progress',
    'bouncing-dots'
  ];

  constructor(private spinner: DSpinnerService) {
    this.spinner.show('allSpinner');

  }

  // Method to show the spinner
  showSpinner(card : any) {
    this.spinner.show(card);
  }

  // Method to hide the spinner
  hideSpinner(card : any) {
    this.spinner.hide(card);
  }


}
