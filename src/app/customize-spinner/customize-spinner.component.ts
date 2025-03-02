import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DSpinnerService } from 'd-spinner';
import { Clipboard } from '@angular/cdk/clipboard';
// import 'prismjs';
// import 'prismjs/components/prism-html.min.js';
import { HighlightService } from '../highlight.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// declare let Prism: any;
@Component({
  selector: 'app-customize-spinner',
  templateUrl: './customize-spinner.component.html',
  styleUrls: ['./customize-spinner.component.scss']
})
export class CustomizeSpinnerComponent {
  form: FormGroup;
  private highlighted: boolean = false

  colorPalette: Array<any> = [
    {
      preview: "#9c27b0e0",
      variants: [
        "#9c27b0",
        "#9c27b0de",
        "#9c27b0bd",
        "#9c27b09c",
        "#9c27b075",
        "#9c27b047",
      ],
    },
    "#00BCD4",
    "#03A9F4",
    "#B2F35C",
  ];

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

  copied: boolean = false;

  constructor(private fb: FormBuilder, private spinner: DSpinnerService, private clipboard: Clipboard, private highlightService: HighlightService, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {
    this.form = this.fb.group({
      loader: ['simple-spinner'],
      width: [100, [Validators.pattern('^[0-9]+$')]],
      thickness: [4, [Validators.pattern('^[0-9]+$')]],
      primaryColor: ['#ff7043'],
      secondaryColor: ['#ffca28'],
      transparencyColor: [' #c8c8c833']

    });
  }

  ngOnInit() {
    this.spinner.show('custom-spinner-c-1');
  }

  get formValues() {
    return this.form.value;
  }

  resetForm() {
    this.form.setValue({
      loader: 'simple-spinner',
      width: 100,
      thickness: 4,
      primaryColor: '#ff7043',
      secondaryColor: '#ffca28',
      transparencyColor: '#c8c8c833'
    });
  }

  getSpinnerConfig(): string {
    const loader = this.form.get('loader')?.value;
    const width = this.form.get('width')?.value;
    const thickness = this.form.get('thickness')?.value;
    const primaryColor = this.form.get('primaryColor')?.value;
    const secondaryColor = this.form.get('secondaryColor')?.value;
    const transparencyColor = this.form.get('transparencyColor')?.value;
  
    let config = `<d-spinner card="custom-spinner-c-1" loader="${loader}"`;
  
    if (width) {
      config += ` width="${width}"`;
    }
  
    if (thickness) {
      config += ` thickness="${thickness}"`;
    }
  
    config += ` primaryColor="${primaryColor}" secondaryColor="${secondaryColor}" transparencyColor="${transparencyColor}"></d-spinner>`;
  
    return config;
  }
  

  copyToClipboard() {
    const spinnerConfig = this.getSpinnerConfig();
    this.clipboard.copy(spinnerConfig);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 3000);

  }
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll()
      this.highlighted = true
    }
  }

}
