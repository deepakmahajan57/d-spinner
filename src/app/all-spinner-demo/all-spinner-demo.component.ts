import { Component } from '@angular/core';
import { DSpinnerService } from 'd-spinner';

@Component({
  selector: 'app-all-spinner-demo',
  templateUrl: './all-spinner-demo.component.html',
  styleUrls: ['./all-spinner-demo.component.scss']
})
export class AllSpinnerDemoComponent {
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

}
