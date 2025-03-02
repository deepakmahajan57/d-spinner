import { Component } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-library-guide',
  templateUrl: './library-guide.component.html',
  styleUrls: ['./library-guide.component.scss']
})
export class LibraryGuideComponent {

  htmlContentModule: string = `
  <pre><code class=\"language-typescript\">  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { DSpinnerModule } from 'd-spinner';  // Import the module
  
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      DSpinnerModule  // Add the module to imports
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }</code></pre>
  `

  htmlContentHTML: string = `
     <pre><code class=\"language-html\">  &lt;div&gt;
    &lt;button (click)="showSpinner()"&gt;Show Spinner&lt;/button&gt;
    &lt;button (click)="hideSpinner()"&gt;Hide Spinner&lt;/button&gt;
  
    &lt;div style="width: 250px; height: 250px; position: relative;border: 1px solid gray;"&gt;
      Content here
      &lt;!-- Example of using the spinner component --&gt;
      &lt;d-spinner
        card="card1"
        loader="simple-spinner"
        width="100"
        thickness="4"
        primaryColor="yellow"
        secondaryColor="cyan"
        transparencyColor="#91919136"&gt;
      &lt;/d-spinner&gt;
    &lt;/div&gt;
  &lt;/div&gt;</code></pre>
  `

  htmlContentTS: string = `
    <pre><code class=\"language-typescript\">  import { Component } from '@angular/core';
  import { DSpinnerService } from 'd-spinner';  // Import the service
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
  
    constructor(private spinner: DSpinnerService) {}
  
    // Method to show the spinner
    showSpinner() {
      this.spinner.show('card1');
    }
  
    // Method to hide the spinner
    hideSpinner() {
      this.spinner.hide('card1');
    }
  }</code></pre>
  `

  spinnerVariants = [
    ['simple-spinner', 'inner-arc', 'outer-arc'],
    ['twin-inner-arc', 'twin-outer-arc', 'inner-orbiting-dot'],
    ['outer-orbiting-dot', 'inner-spiral', 'dual-segment'],
    ['dotted-circular', 'rotating-bar', 'ring'],
    ['square-wave', 'glowing-ring', 'half-ring'],
    ['intersecting-ring', 'balancing-shapes', 'rotating-slice'],
    ['inner-fill-arc', 'rolling-circle', 'orbiting-dots'],
    ['dual-pulsating-dots', 'expanding-dots', 'rotating-double-square'],
    ['scattered-diamond', 'pulsating-grid', 'expanding-square'],
    ['tilted-bar', 'bouncing-diamond', 'intersecting-triangle'],
    ['rotating-triangle', 'bouncing-square', 'spin-with-bounce'],
    ['circle-inside-square', 'vertical-bars-pulsation', 'flipping-parallel-lines'],
    ['rising-bars-with-dot', 'dashed-line-expansion', 'balancing-capsule'],
    ['loading-bounce', 'expanding-block', 'arc-of-dots'],
    ['rotating-pie-shape', 'circular-progress', 'bouncing-dots']
  ];

  private highlighted: boolean = false

  constructor(private highlightService: HighlightService) { }
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll()
      this.highlighted = true
    }
  }
}
