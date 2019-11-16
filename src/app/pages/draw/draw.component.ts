import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  canvas: HTMLCanvasElement;
  canvasCtx: CanvasRenderingContext2D;

  prevX;
  prevY;

  currX;
  currY;

  isMouseDown = false;

  public CurrentColor = '000000';

  constructor() { }

  ngOnInit() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;

    this.canvas.width = 800;
    this.canvas.height = 500;

    this.canvasCtx = this.canvas.getContext('2d');

    this.canvas.addEventListener('mousedown', (evt) => {
      this.currX = evt.clientX;
      this.currY = evt.clientY;

      this.canvasCtx.moveTo(this.currX, this.currY);
      this.canvasCtx.beginPath();

      this.isMouseDown = true;
    });

    this.canvas.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });

    this.canvas.addEventListener('mousemove', (evt) => {
      this.currX = evt.clientX;
      this.currY = evt.clientY;
      if (this.isMouseDown === true) {
        this.canvasCtx.lineTo(this.currX, this.currY);
        this.canvasCtx.strokeStyle = '#' + this.CurrentColor;
        this.canvasCtx.stroke();
      }
    });
  }

  setColour(colour: string) {
    this.CurrentColor = colour;
  }
}
