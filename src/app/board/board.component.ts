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
  playState: boolean;
  animationInterval;
  shapeSelected: boolean[][];
  board: Cell[][] = [];
  rows: number;
  cols: number;
  // board: boolean[][] = [[false, false, false], [false, false, false], [false, false, false]];

  constructor(public gameStateService: GameStateService) {
    this.playState = false;
    this.game = gameStateService.getGameState().subscribe(data => {
      this.game = data;
      console.log(this.game.board);
    });
    this.shapeSelected = [[true]];
  }

  ngOnInit() {
    // find current browser dimensions and generate relatively sized board
    let screenWidth: number = window.innerWidth;
    let screenHeight: number = window.innerHeight;
    this.rows = Math.floor(.85 * screenHeight/30);
    this.cols = Math.floor(.9 * screenWidth/30);
    for (let i = 0; i < this.rows; i++) {
      let row: Cell[] = [];
      for (let j = 0; j < this.cols; j++) {
        row.push(new Cell(i, j));
      }
      this.board.push(row);
    }
  }

  cellClass(currentCell) {
    if (currentCell.state) {
      return "cell black";
    } else {
      return "cell white"
    }
  }

  clickCell(currentCell) {
    if (this.shapeSelected.length > 0) {
      //place shape
      this.game.placeShape(currentCell, this.shapeSelected);
    } else {
      //flip single cell
      currentCell.state = !currentCell.state;
    }
  }

  togglePlay() {
    this.playState = !this.playState;
    if (this.playState) {
      this.animationInterval = setInterval(() => {this.nextState()}, 50);
    } else {
      clearInterval(this.animationInterval);
    }
  }

  // togglePlayButton() {
  //   if (this.playState) {
  //     return "Pause";
  //   } else {
  //     return "Play";
  //   }
  // }

  nextState() {
    this.game.findNextState();
    this.game.renderNextState();
  }
}
