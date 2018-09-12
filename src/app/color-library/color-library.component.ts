import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../game-state.service';

@Component({
  selector: 'app-color-library',
  templateUrl: './color-library.component.html',
  styleUrls: ['./color-library.component.css']
})
export class ColorLibraryComponent implements OnInit {
  colors: string[] = ['green', 'pink', 'orange', 'yellow']

  constructor(public gameStateService: GameStateService) { }

  ngOnInit() {
  }

  selectColor(color) {
    this.gameStateService.selectedColor = `${color}-theme`
    console.log('updated color in state: ', this.gameStateService.selectedColor);
  }

}
