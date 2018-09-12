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
  // board: boolean[][] = [[false, false, false], [false, false, false], [false, false, false]];

  constructor(public gameStateService: GameStateService) {
    gameStateService.subscribeToPlayState().subscribe(stateObservable => {
      console.log(stateObservable);
      this.isPlaying = stateObservable;
    });

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
    this.gameStateService.createGame(this.rows, this.cols, this.board);
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

  // togglePlay() {
  //   this.isPlaying = !this.isPlaying;
  //   if (this.isPlaying) {
  //     this.animationInterval = setInterval(() => {this.nextState()}, 50);
  //   } else {
  //     clearInterval(this.animationInterval);
  //   }
  // }
  //
  // nextState() {
  //   this.game.findNextState();
  //   this.game.renderNextState();
  // }
}
