import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  //since we have not give value to variable therefore give !
  name !: string;
  email !: string; 
  pass !: string;
  cpass !: string;

  //we use two way binding
  //1. app.ts add
  //2. [(ngModel)='var_name']

  

  doRegister(){
    console.log('Register done')
    console.log(this.name)
  }
}
