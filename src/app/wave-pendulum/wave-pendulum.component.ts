import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave-pendulum',
  templateUrl: './wave-pendulum.component.html',
  styleUrls: ['./wave-pendulum.component.css']
})
export class WavePendulumComponent implements OnInit {

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private frame: number = 0;
  private frameRate: number = 60;
  constructor() {
   }

  ngOnInit() {
      this.canvas = <HTMLCanvasElement>document.getElementById('wave_canvas');
      this.canvas.style.width  = ''+0.5*window.innerWidth+'px';
      this.canvas.style.height = ''+0.5*window.innerWidth*9/16+'px';
      this.canvas.width=1920
      this.canvas.height=1080
      this.context= this.canvas.getContext('2d');

      setInterval(()=>{this.drawCanvas()}, 1000/this.frameRate);
  }

  drawCanvas()
  {
    let t = this.frame/this.frameRate;
    this.frame++;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let P=54;
    let N=12;
    
    for(let i=0;i<N;i++)
    {
      this.context.beginPath()
      this.context.arc(860+400*Math.cos(5*t*(P+i)/P),970-70*i,90,0,6.3)
      this.context.fill()
      this.context.strokeStyle='white';
      this.context.lineWidth=5;
      this.context.stroke()
    }
  }

}
