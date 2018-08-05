import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EjngPipesComponent } from './ejng-pipes/ejng-pipes.component';
import { EuroPipe } from './pipes/euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EjngPipesComponent,
    EuroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
