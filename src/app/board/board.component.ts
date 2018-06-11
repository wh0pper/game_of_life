import { Component, OnInit } from '@angular/core';
import { CurrentGameService } from '../current-game.service';
import { Game } from '../game';

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
  // library: Library;
  boardRows: number;
  boardCols: number;

  constructor(public currentGameService: CurrentGameService) {
    this.playState = false;
    let screenWidth: number = window.innerWidth;
    let screenHeight: number = window.innerHeight;
    this.boardRows = Math.floor(.85 * screenHeight/30);
    this.boardCols = Math.floor(.9 * screenWidth/30);
    console.log('width x height:', screenWidth, screenHeight);
    console.log('rows x cols:', this.boardRows, this.boardCols);
    this.game = new Game(this.boardRows, this.boardCols);
    this.shapeSelected = [];
    // this.library = new Library();
  }

  ngOnInit() {
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
