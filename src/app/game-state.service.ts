import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Game } from './game';
import { Cell } from './cell';
@Injectable(
  // {
  // providedIn: 'root',
  // }
)

export class GameStateService {
  isPlaying: boolean = false;
  selectedShape: boolean[][] = [[true]];
  selectedColor: string = "green-theme";
  board: Cell[][];
  game: Game;

  constructor() {
  }

  public createGame(board) {
    this.board = board;
    this.game = new Game(board)
  }

  // public subscribeToPlayState(): Observable<boolean> {
  //   return of(this.isPlaying);
  // }

  public selectShape(shapeArray) {
    console.log('setting selected shape in state: ', shapeArray);
    this.selectedShape = shapeArray;
  }

  // public subscribeToShape(): Observable<any> {
  //   return of(this.selectedShape);
  // }

  public togglePlayState() {
    this.isPlaying = !this.isPlaying;
  }

  public resetBoard() {
    console.log('resetting board in service', this.board);
    this.board.forEach((row) => {
      row.forEach((cell) => {
        cell.state = false;
      })
    })
  }

}
