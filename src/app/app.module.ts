import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // <-- Import this

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DSpinnerModule } from 'd-spinner';
import { TabsComponent } from './tabs/tabs.component';
import { MultiCardDemoComponent } from './multi-card-demo/multi-card-demo.component';
import { AllSpinnerDemoComponent } from './all-spinner-demo/all-spinner-demo.component';
import { CustomizeSpinnerComponent } from './customize-spinner/customize-spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { LibraryGuideComponent } from './library-guide/library-guide.component';
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    MultiCardDemoComponent,
    AllSpinnerDemoComponent,
    CustomizeSpinnerComponent,
    LibraryGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DSpinnerModule,
    ReactiveFormsModule,
    FormsModule, NgxColorsModule,
    BrowserAnimationsModule ,
    ClipboardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
