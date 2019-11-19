import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColoursService {
  public colours: Array<string> = ['000000', 'FF0000', '00FF00', '0000FF'];

  public returnColour(index: number): string {
    return this.colours[index];
  }


  constructor() { }
}
