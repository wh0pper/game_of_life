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
  selectedColor: string = "pink-theme";

  constructor() {
  }

  public subscribeToPlayState(): Observable<boolean> {
    return of(this.isPlaying);
  }

  public selectShape(shapeArray) {
    console.log('setting selected shape in state: ', shapeArray);
    this.selectedShape = shapeArray;
  }

  public subscribeToShape(): Observable<any> {
    return of(this.selectedShape);
  }

}
