import { Component, OnInit } from '@angular/core';
import { ColoursService } from 'src/app/services/colours.service';

@Component({
  selector: 'app-colour-manager',
  templateUrl: './colour-manager.component.html',
  styleUrls: ['./colour-manager.component.css']
})
export class ColourManagerComponent implements OnInit {
  private colour = '000000';
  public currentRed = 0;
  public currentGreen = 0;
  public currentBlue = 0;
  public currentAlpha = 1;

  constructor(public coloursService: ColoursService) { }

  getColour() {
    return 'rgba(' +
    this.currentRed.toString() + ',' +
    this.currentGreen.toString() + ',' +
    this.currentBlue.toString() + ',' +
    (this.currentAlpha).toString() + ')';
  }

  saveColour() {
    this.coloursService.createColour(this.currentRed.toString(16) + this.currentGreen.toString(16) + this.currentBlue.toString(16));
    console.log(this.coloursService.colours);
  }

  ngOnInit() {
  }

}
