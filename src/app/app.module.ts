import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquaresComponent } from './loaders/squares/squares.component';
import { BackgroundRotatingRectanglesComponent } from './loaders/background-rotating-rectangles/background-rotating-rectangles.component';
import { LiquidBowlComponent } from './loaders/liquid-bowl/liquid-bowl.component';
import { PulseComponent } from './loaders/pulse/pulse.component';
import { PulseImageComponent } from './loaders/pulse-image/pulse-image.component';
import { AutumnComponent } from './loaders/autumn/autumn.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SquaresComponent,
    BackgroundRotatingRectanglesComponent,
    LiquidBowlComponent,
    PulseComponent,
    PulseImageComponent,
    AutumnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
