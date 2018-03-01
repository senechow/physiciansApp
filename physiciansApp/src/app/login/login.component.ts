import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appConfig } from '../app.config';

import { AuthorizationService } from '../_services/authorization.service';

import {GoogleSignInSuccess} from 'angular-google-signin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientId: string = appConfig.clientId;

  constructor(private authorizationService: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
  }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
  	this.authorizationService.signIn(event);
    this.router.navigate(['/']);
  }

}
