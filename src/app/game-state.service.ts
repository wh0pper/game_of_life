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
  isPlaying: boolean = false;
  selectedShape: boolean[][] = [[true]];

  constructor() {
  }

  public subscribeToPlayState(): Observable<boolean> {
    return of(this.isPlaying);
  }

  public selectShape(shapeArray) {
    this.selectedShape = shapeArray;
    console.log(this.selectedShape);
  }

  public subscribeToShape(): Observable<boolean[][]> {
    return of(this.selectedShape);
  }

}
