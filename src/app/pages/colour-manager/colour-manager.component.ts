import { Component, OnInit } from '@angular/core';
import { ColoursService } from 'src/app/services/colours.service';
import { Router } from '@angular/router';

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

  constructor(public coloursService: ColoursService, public router: Router) { }

  getColour() {
    return 'rgba(' +
    this.currentRed.toString() + ',' +
    this.currentGreen.toString() + ',' +
    this.currentBlue.toString() + ',' +
    this.currentAlpha.toString() + ')';
  }

  saveColour() {
    console.log(this.currentRed.toString(16));
    console.log(this.currentGreen.toString(16));
    console.log(this.currentBlue.toString(16));
    console.log(this.currentAlpha.toString(16));
    console.log(this.currentRed.toString(16) + this.currentGreen.toString(16) + this.currentBlue.toString(16));
    console.log(this.coloursService.RGBtoHex(this.currentRed, this.currentBlue, this.currentGreen));
    this.coloursService.createColour(this.coloursService.RGBtoHex(this.currentRed, this.currentGreen, this.currentBlue));
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}
