import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Game } from './game';

@Injectable(
  // {
  // providedIn: 'root',
  // }
)

export class CurrentGameService {
  currentGame: Game;
  boardRows: number;
  boardCols: number;

  constructor() {
    let screenWidth: number = window.innerWidth;
    let screenHeight: number = window.innerHeight;
    this.boardRows = Math.floor(.85 * screenHeight/30);
    this.boardCols = Math.floor(.9 * screenWidth/30);
    this.currentGame = new Game(this.boardRows, this.boardCols);
  }

  public getCurrentGame(): Observable<Game> {
    return of(this.currentGame);
  }

  public selectShape(shapeArray) {
    this.currentGame.selectedShape = shapeArray;
  }

}
