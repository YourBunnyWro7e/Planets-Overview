import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {HeaderModule} from './header/header.module';
import { AppComponent } from './app.component';
import { PlanetAnimationDirective } from './gallery/list/planet-animation.directive';



@NgModule({
  declarations: [
    AppComponent,
    PlanetAnimationDirective,
  ],
  imports: [
    BrowserModule, HeaderModule, BrowserAnimationsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
