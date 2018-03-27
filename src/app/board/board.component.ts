import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  game: Game;
  playState: boolean;
  constructor() {
    this.playState = false;
    this.game = new Game(8,10);
  }

  ngOnInit() {
  }

  cellClass(currentCell) {
    if (currentCell.state) {
      return "cell black";
    } else {
      return "cell grey"
    }
  }
  toggleCell(currentCell) {
    currentCell.state = !currentCell.state;
  }

  togglePlay() {
    this.playState = !this.playState;
  }

  togglePlayButton() {
    if (this.playState) {
      return "Pause";
    } else {
      return "Play";
    }
  }
}

export class Cell {
  state: boolean;
  nextState: boolean;
  constructor() {
    this.state = true;
  }
}

export class Game {
  board: Cell[][];
  constructor(rows, columns) {
    this.board = [];
    for (let i = 0; i < rows; i++) {
      let column: Cell[] = [];
      for (let j = 0; j < columns; j++) {
        column.push(new Cell());
      }
      this.board.push(column);
    }
  }

  findNextState() {
    for()
  }


}
