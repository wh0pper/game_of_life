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

  constructor() {

    this.gameState = new Game(this.boardRows, this.boardCols);
  }

  public getGameState(): Observable<Game> {
    return of(this.gameState);
  }

  public selectShape(shapeArray) {
    this.gameState.selectedShape = shapeArray;
  }

}
