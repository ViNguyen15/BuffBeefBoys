import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LiftComponent } from './lift/lift.component';
import { CharacterStatsComponent } from './character-stats/character-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    LiftComponent,
    CharacterStatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
