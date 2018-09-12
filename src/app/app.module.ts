import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { LibraryComponent } from './library/library.component';

import { GameStateService } from './game-state.service';
import { ColorLibraryComponent } from './color-library/color-library.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LibraryComponent,
    ColorLibraryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GameStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
