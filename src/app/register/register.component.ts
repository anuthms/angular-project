import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  aim="Registeration Page"
  user=""
  accno ="Account Number"
  pswd=""

  constructor() { }

  ngOnInit(): void {
  }

register(){
  alert("regiteration sucessfull");
}

}
