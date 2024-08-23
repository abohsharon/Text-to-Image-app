import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ColorEvent } from 'ngx-color';
import { ColorChromeModule } from 'ngx-color/chrome';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [ColorChromeModule, FormsModule],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.css'
})
export class GeneratorComponent {

 @ViewChild('canva', {static: false})  myCanvas: any;

 topText:string = '';
 bottomText:string = '';
 fileEvent:any;
 textColor: string = '#000000'; 
 backgroundColor: string = '#F9F9FB';

  preview(e:any){

    this.fileEvent = e;
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');

    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);


    render.onload = function (event) {
     
      const img = new Image();
      console.log(img);
      img.src = event.target?.result as string
       
      //   img.src = render.result as string

        // console.log(e.target.files)

      // img.src = event.target.result as string;

      img.onload = function (){
        // ctx.drawImage(img , 33, 71, 104, 124, 21, 20, 87, 104);
        ctx.drawImage(img , 20, 25, 260, 100);
      }
    }

  }

  drawText(){
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.preview(this.fileEvent)

    ctx.fillStyle = this.textColor;
    ctx.font = '12px Roman Italic Ms'
    ctx.fillText(this.topText, canvas.width/3, 20)

    ctx.fillText(this.bottomText, canvas.width/3, 140)

  }

  canvasTextColor($event: ColorEvent){
      this.textColor = $event.color.hex;
      this.drawText();
  }

  canvasBackgroundColor($event: ColorEvent){
       this.backgroundColor = $event.color.hex;
       this.drawText()
  }

  imageDownload(){
    let canvas = this.myCanvas.nativeElement;
    
    let image = canvas.toDataURL('image/png');

    let link = document.createElement('a');
    link.download = 'Img.png';
    link.href = image;
    link.click();
  }
   
}
