import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Game } from './game';

@Injectable(
  // {
  // providedIn: 'root',
  // }
)

export class GameStateService {
  gameState: Game;
  boardRows: number;
  boardCols: number;

  constructor() {
    let screenWidth: number = window.innerWidth;
    let screenHeight: number = window.innerHeight;
    this.boardRows = Math.floor(.85 * screenHeight/30);
    this.boardCols = Math.floor(.9 * screenWidth/30);
    this.gameState = new Game(this.boardRows, this.boardCols);
  }

  public getGameState(): Observable<Game> {
    return of(this.gameState);
  }

  public selectShape(shapeArray) {
    this.gameState.selectedShape = shapeArray;
  }

}
