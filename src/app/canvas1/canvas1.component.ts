import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas1',
  templateUrl: './canvas1.component.html',
  styleUrls: ['./canvas1.component.css'],
})
export class Canvas1Component implements OnInit {
  constructor() {}

  context?: CanvasRenderingContext2D;

  @ViewChild('myCanvas') myCanvas!: ElementRef;
  ngOnInit(): void {}

  preview(e: any) {
    console.log(e);
    let canvas = this.myCanvas.nativeElement;
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, 300, 300);

    // show rendered imahe

    var rendered = new FileReader();

    rendered.onload = function (event) {
      var img:any = new Image();
      img.onload = function () {
        // img.height= "300px"
        // img.width= '500px'
        canvas.width = "500px"
        canvas.height = '300px'
        context.drawImage(img ,  0,0);

      };
      img.src = event.target?.result
      // img.src ==null ? "": event.target!.result
// 
    };

    rendered.readAsDataURL(e.target!.files[0])
  }
}
