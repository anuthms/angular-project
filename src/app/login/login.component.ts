import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  aim="A perfect banking partner"
  account="Account Number"
  accno="";
  pswd="";
  accountdetails:any = {
    1000: { accno: 1000, password: "user1", balance: 5000 ,username:"anu"},
    1001: { accno: 1001, password: "user2", balance: 1000 ,username:"ann"},
    1002: { accno: 1002, password: "user3", balance: 3000 ,username:"rose"},


}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  changepswd(event:any){
    this.pswd= event.target.value;
    console.log(this.pswd);
  }
  changeACC(event:any){
    this.accno= event.target.value;
    console.log(this.accno);

  }

login(){
 
  var accno=this.accno;
  var pswd=this.pswd;
  
  var dataset = this.accountdetails;
        if (accno in dataset) {
            if (pswd == dataset[accno]['password']) {
                
               alert("login successfull");
               this.router.navigateByUrl("dashboard");
                //succesfull authentication
            }

            else {
                alert("login failed");
                //invalid password
            }}
        else{
          alert("invalid acccount")

        }
        
}
register()
{

this.router.navigateByUrl("register");
}
}
