import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentGameService } from '../current-game.service';
import { Game } from '../game';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  game: Observable<Game>;
  playState: boolean;
  animationInterval;
  shapeSelected: boolean[][];
  // library: Library;
  boardRows: number;
  boardCols: number;

  constructor(public currentGameService: CurrentGameService) {
    this.playState = false;
    this.game = currentGameService.getCurrentGame();
    console.log(this.game);
    //this.game
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
