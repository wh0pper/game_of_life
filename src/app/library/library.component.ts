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
  selectedIndex: number = 0;

  constructor(public gameStateService: GameStateService) { }

  ngOnInit() {
    let one = [[true]];
    let glider = [[false, true, false], [false, false, true], [true, true, true]];
    let toad = [[false, true, true, true], [true, true, true, false]];
    let beehive = [[false, true, true, false], [true, false, false, true], [false, true, true, false]];
    let spaceship = [[false, true, true, true, true], [true, false, false, false, true], [false, false, false, false, true], [true, false, false, true, false]];
    // let pentadecathlon = [[true, true, true], [true, false, true], [true, true, true], [true, true, true], [true, true, true], [true, true, true], [true, false, true], [true, true, true]];
    let pentadecathlon = [[true, true, true, true, true, true, true, true], [true, false, true, true, true, true, false, true], [true, true, true, true, true, true, true, true]];
    this.shapes = [one, glider, toad, beehive, spaceship, pentadecathlon];
  }

  clickShape(currentShape) {
    this.selectedIndex = this.shapes.indexOf(currentShape);
    this.gameStateService.selectShape(currentShape);
  }

  shapeClass(currentShape) {
    let index = this.shapes.indexOf(currentShape);
    // console.log('current selected shape index: ', this.selectedIndex, index);
    // console.log('passed shape: ', currentShape);
    if (index == this.selectedIndex) return `${this.gameStateService.selectedColor}-border shape`;
    else return "shape";
  }

  shapeCellClass(currentCell) {
    if (currentCell) return "shapeCell grey";
    else return "shapeCell white";
  }

}
