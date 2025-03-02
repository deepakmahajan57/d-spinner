import { Component } from '@angular/core';
import { DSpinnerService } from 'd-spinner';

@Component({
  selector: 'app-multi-card-demo',
  templateUrl: './multi-card-demo.component.html',
  styleUrls: ['./multi-card-demo.component.scss']
})
export class MultiCardDemoComponent {

  constructor(private spinner: DSpinnerService) { }

  showSpinner(card: any) {
    this.spinner.show(card);
  }

  hideSpinner(card: any) {
    this.spinner.hide(card);
  }

}
