import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameStateService } from '../game-state.service';
import { Game } from '../game';
import { Cell } from '../cell';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  game: Game;
  isPlaying: boolean = false;
  animationInterval;
  board: Cell[][] = [];
  rows: number;
  cols: number;
  title: boolean[][] = [
                        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
                        [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true],
                        [true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true],
                        [true, false, false, false, true, true, true, false, true, true, true, false, true, true, true, false, true, false, true, false, true, false, true, false, true, false, false, true, true, false, true],
                        [true, false, true, false, true, false, true, false, true, false, true, false, true, false, false, false, true, false, true, false, true, false, true, false, true, false, false, true, false, false, true],
                        [true, false, true, false, true, false, true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, false, true, true, true, false, true, true, false, false, true],
                        [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true],
                        [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
                      ]


  constructor(public gameStateService: GameStateService) {

  }

  ngOnInit() {
    // find current browser dimensions and generate relatively sized board
    let screenWidth: number = window.innerWidth;
    let screenHeight: number = window.innerHeight;
    this.rows = Math.floor(.825 * screenHeight/30);
    this.cols = Math.floor(.9 * screenWidth/30);
    for (let i = 0; i < this.rows; i++) {
      let row: Cell[] = [];
      for (let j = 0; j < this.cols; j++) {
        row.push(new Cell(i, j));
      }
      this.board.push(row);
    }
    this.gameStateService.createGame(this.board);
    let center = new Cell(Math.floor(this.rows/2)-4, Math.floor(this.cols/2)-15)
    this.gameStateService.game.placeShape(center, this.title);
  }

  cellClass(currentCell) {
    if (currentCell.state) {
      return `cell ${this.gameStateService.selectedColor}`;
    } else {
      return "cell white"
    }
  }

  clickCell(currentCell) {
    if (!currentCell.state) {
      //place shape
      this.gameStateService.game.placeShape(currentCell, this.gameStateService.selectedShape);
    } else {
      //flip single cell
      currentCell.state = !currentCell.state;
    }
  }

}
