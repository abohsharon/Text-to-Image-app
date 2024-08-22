import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
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


  preview(e:any){
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas.getContext('2d');

    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);


    render.onload = function (event) {
     
      const img = new Image();
        
        img.src = render.result as string

        // console.log(e.target.files)

      // img.src = event.target.result as string;

      img.onload = function (){
        ctx.drawImage(img , 50, 50);
      }
    }

  }

   
}
