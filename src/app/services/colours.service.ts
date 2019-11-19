import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColoursService {
  public colours: Array<string> = ['#000000', '#FF0000', '#00FF00', '#0000FF'];

  public returnColour(index: number): string {
    return this.colours[index];
  }

  public createColour(colour: string) {
    this.colours.push(colour);
  }

  public RGBtoHex(r: number, g: number, b: number) {
    let rStr = r.toString(16);
    if (rStr.length === 1) {
      rStr = '0' + rStr;
    }
    let gStr = g.toString(16);
    if (gStr.length === 1) {
      gStr = '0' + gStr;
    }
    let bStr = b.toString(16);
    if (bStr.length === 1) {
      bStr = '0' + bStr;
    }
    return '#' + rStr + gStr + bStr;
  }

  constructor() { }
}
