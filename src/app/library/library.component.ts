import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  shapes: any[];
  selectedShape: boolean[][];

  constructor(public gameStateService: GameStateService) { }

  ngOnInit() {
    let glider = [[false, true, false], [false, false, true], [true, true, true]];
    let toad = [[false, true, true, true], [true, true, true, false]];
    let beehive = [[false, true, true, false], [true, false, false, true], [false, true, true, false]];
    let spaceship = [[false, true, true, true, true], [true, false, false, false, true], [false, false, false, false, true], [true, false, false, true, false]];
    let pentadecathlon = [[true, true, true], [true, false, true], [true, true, true], [true, true, true], [true, true, true], [true, true, true], [true, false, true], [true, true, true]];
    this.shapes = [glider, toad, beehive, spaceship, pentadecathlon];
  }

  clickShape(currentShape) {
    console.log('library clickShape: ', currentShape);
    this.gameStateService.selectShape(currentShape);
  }

  shapeCellClass(currentCell) {
    if (currentCell) return "shapeCell grey";
    else return "shapeCell white"
  }

}
