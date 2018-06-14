import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { LibraryComponent } from './library/library.component';

import { GameStateService } from './game-state.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    LibraryComponent
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
