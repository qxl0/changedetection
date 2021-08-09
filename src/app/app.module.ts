import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CounterComponent } from './counter/counter.component';
import { ItemslistComponent } from './itemslist/itemslist.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';
import { PatientlistComponent } from './patientlist/patientlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    ItemslistComponent,
    PizzalistComponent,
    PatientlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
