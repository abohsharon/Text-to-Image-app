import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneratorComponent } from './generator/generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule, NgIf, NgTemplateOutlet, NgFor, NavbarComponent, GeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'JellyFree'; 

  // isLoggedIn:boolean = false;
  // isLoggedOut:boolean = true;
  // userName:string = 'Zoe Kravits'
  // logInCount: number = 0;

  // logsIn(){
  //   this.logInCount++;
  // }

//   imgUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLwlD1OZooPootRw_t_OcieNyfMisblqvSA&s';
//   isDisabled: boolean = false ;
//   isActive: boolean = true;
//   jellyName: string =   'neptune' ;

//   buttonClick(){
//       alert("Bonjour!")
//   };


  // keyEnter(user:HTMLInputElement){
  //   console.log(user.value)
  // };

userName:string = 'D. Chappelle';

updateEnter(username: HTMLInputElement){
   this.userName = username.value;
  console.log(this.userName)
}

textValue = "One Way Data Binding";
onKeyUp(){
  console.log(this.textValue)
};

//   textEnter(event: object){
//     console.log(event)
//   };


rates: Array<number> = [25, 77, 99, 100, 2, 18];

}
