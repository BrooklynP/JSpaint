import { Component, OnInit } from '@angular/core';
import { ColoursService } from 'src/app/services/colours.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  canvas: HTMLCanvasElement;
  canvasCtx: CanvasRenderingContext2D;

  currX: number;
  currY: number;

  startX: number;
  startY: number;
  endX: number;
  endY: number;

  isMouseDown = false;

  currentColourIndex = 0;

  public CurrentColor = '#000000';
  public CurrentStrokeWidth = 1;
  public toolBeingUsed = 'Draw';

  private readonly canvasWidth = 800;
  private readonly canvasHeight = 500;

  constructor(public colourService: ColoursService, public router: Router) { }

  ngOnInit() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;

    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;

    this.canvasCtx = this.canvas.getContext('2d');

    this.clearCanvas();

    this.canvas.addEventListener('mousedown', (evt) => {
      this.currX = evt.clientX;
      this.currY = evt.clientY;
      this.isMouseDown = true;
      this.startX = evt.clientX;
      this.startY = evt.clientY;

      if (this.toolBeingUsed === 'Line' || this.toolBeingUsed === 'Rectangle') {
        return;
      }
      else if (this.toolBeingUsed === 'Fill') {
        this.fillCanvas(this.CurrentColor);
        return;
      }

      this.canvasCtx.moveTo(this.currX, this.currY);
      this.canvasCtx.beginPath();
    });

    this.canvas.addEventListener('mouseup', (evt) => {
      this.endX = evt.clientX;
      this.endY = evt.clientY;
      if (this.toolBeingUsed === 'Line') {


        this.canvasCtx.beginPath();
        this.canvasCtx.moveTo(this.startX, this.startY);
        this.canvasCtx.lineTo(this.endX, this.endY);
        this.canvasCtx.strokeStyle = this.CurrentColor;
        this.canvasCtx.lineWidth = this.CurrentStrokeWidth;
        this.canvasCtx.stroke();
      }
      if (this.toolBeingUsed === 'Rectangle') {
        this.canvasCtx.beginPath();
        this.canvasCtx.strokeStyle = this.CurrentColor;
        this.canvasCtx.lineWidth = this.CurrentStrokeWidth;
        this.canvasCtx.rect(this.startX, this.startY, this.endX - this.startX, this.endY - this.startY);
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
          this.canvasCtx.strokeStyle = this.CurrentColor;
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
    this.router.navigateByUrl('colours');
  }

  saveImage() {
    let fileName = window.prompt('Save Image: Enter a file name') + '.png';
    if (fileName) {
      const link = (document.getElementById('downloadImageLink') as HTMLAnchorElement);
      link.setAttribute('download', fileName);
      link.setAttribute('href', this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
      link.click();
    }
  }

  clearCanvas() {
    this.fillCanvas('white');
  }

  fillCanvas(colour: string) {
    this.canvasCtx.fillStyle = colour;
    this.canvasCtx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }
}
