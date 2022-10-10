import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 register:Register = new Register();

  constructor(private registerservice: RegisterService) { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.register);
    this.registerservice.registerUser(this.register).subscribe(data=>{
      alert("Successfully User Is Registerd")
    }, error=>alert("Sorry User is not register"));
  }

}
