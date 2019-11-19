import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  canvas: HTMLCanvasElement;
  canvasCtx: CanvasRenderingContext2D;

  currX;
  currY;

  startX;
  startY;
  endX;
  endY;

  isMouseDown = false;

  public CurrentColor = '000000';
  public CurrentStrokeWidth = 1;
  public toolBeingUsed = 'Draw';

  constructor() { }

  ngOnInit() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;

    this.canvas.width = 800;
    this.canvas.height = 500;

    this.canvasCtx = this.canvas.getContext('2d');

    this.canvas.addEventListener('mousedown', (evt) => {
      this.currX = evt.clientX;
      this.currY = evt.clientY;
      this.isMouseDown = true;

      if (this.toolBeingUsed === 'Line') {
        this.startX = evt.clientX;
        this.startY = evt.clientY;
        return;
      }

      this.canvasCtx.moveTo(this.currX, this.currY);
      this.canvasCtx.beginPath();
    });

    this.canvas.addEventListener('mouseup', (evt) => {

      if (this.toolBeingUsed === 'Line') {
        this.endX = evt.clientX;
        this.endY = evt.clientY;

        console.log(this.startX);
        console.log(this.startY);
        console.log(this.endX);
        console.log(this.endY);

        this.canvasCtx.beginPath();
        this.canvasCtx.moveTo(this.startX, this.startY);
        this.canvasCtx.lineTo(this.endX, this.endY);
        this.canvasCtx.strokeStyle = '#' + this.CurrentColor;
        this.canvasCtx.lineWidth = this.CurrentStrokeWidth;
        this.canvasCtx.stroke();
      }

      this.isMouseDown = false;
    });

    this.canvas.addEventListener('mousemove', (evt) => {
      this.currX = evt.clientX;
      this.currY = evt.clientY;
      if (this.isMouseDown === true) {
        if (this.toolBeingUsed === 'Draw') {
          this.canvasCtx.lineTo(this.currX, this.currY);
          this.canvasCtx.strokeStyle = '#' + this.CurrentColor;
          this.canvasCtx.lineWidth = this.CurrentStrokeWidth;
          this.canvasCtx.stroke();
        } else
        if (this.toolBeingUsed === 'Eraser') {
          this.canvasCtx.lineTo(this.currX, this.currY);
          this.canvasCtx.strokeStyle = '#ffffff';
          this.canvasCtx.lineWidth = this.CurrentStrokeWidth;
          this.canvasCtx.stroke();
        }
      }
    });
  }

  setColour(colour: string) {
    this.CurrentColor = colour;
  }
  setTool(tool: string) {
    this.toolBeingUsed = tool;
  }

  goToColourManager() {
    window.open('colours');
  }
}
