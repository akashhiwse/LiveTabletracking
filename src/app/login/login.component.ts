import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../user';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  
  constructor(private userloginservice:UserloginService, private route:Router) { }

  ngOnInit(): void {

  }

  userlogin(){
    console.log(this.user),
    this.userloginservice.loginUser(this.user).subscribe(data=>{
      alert("Login Successful")
      this.route.navigate(['/table']);
    }, error=>alert("Sorry Please Enter Correct UserId and PassWord"));
    
  }

}
