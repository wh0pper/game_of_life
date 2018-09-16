import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  animationInterval;

  constructor(private gameStateService: GameStateService) { }

  ngOnInit() {
  }

  togglePlay() {
    this.gameStateService.togglePlayState();
    if (this.gameStateService.isPlaying) {
      this.animationInterval = setInterval(() => {this.nextState()}, 50);
    } else {
      clearInterval(this.animationInterval);
    }
  }

  nextState() {
    this.gameStateService.game.findNextState();
    this.gameStateService.game.renderNextState();
  }

  buttonColorClass() {
    return `button ${this.gameStateService.selectedColor}-svg`
  }

  resetBoard() {
    this.gameStateService.resetBoard();
  }

}
