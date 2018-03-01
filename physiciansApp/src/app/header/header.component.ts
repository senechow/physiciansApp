import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthorizationService } from '../_services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  googleUser: gapi.auth2.GoogleUser;
  googeUserSubscription: Subscription;	

  constructor(private authorizationService : AuthorizationService) {

  }

  ngOnInit() {
  	this.googeUserSubscription = this.authorizationService.googleUserChanged
      .subscribe((googleUser) => {
        this.googleUser = googleUser;
      });
  }

  ngOnDestroy() {
  	this.googeUserSubscription.unsubscribe;
  }

  onSignOut() {
	this.authorizationService.signOut();
  }

}
