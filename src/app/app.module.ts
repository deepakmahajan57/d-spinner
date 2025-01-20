import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DSpinnerModule } from 'd-spinner';
import { TabsComponent } from './tabs/tabs.component';
import { MultiCardDemoComponent } from './multi-card-demo/multi-card-demo.component';
import { AllSpinnerDemoComponent } from './all-spinner-demo/all-spinner-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    MultiCardDemoComponent,
    AllSpinnerDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DSpinnerModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
