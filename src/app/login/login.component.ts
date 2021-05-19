import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="A perfect banking partner"
  account="Account Number"
  constructor() { }

  ngOnInit(): void {
  }

}
