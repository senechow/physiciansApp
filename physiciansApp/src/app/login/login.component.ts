import { Component, OnInit } from '@angular/core';
import { appConfig } from '../app.config';

import {GoogleSignInSuccess} from 'angular-google-signin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientId: string = appConfig.googleAPIKey;

  constructor() { }

  ngOnInit() {
  }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
  	console.log("Hello!");
  }

}
