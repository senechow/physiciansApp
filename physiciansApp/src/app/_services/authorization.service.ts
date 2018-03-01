import { Subject } from 'rxjs/Subject';
import { GoogleSignInSuccess } from 'angular-google-signin';

export class AuthorizationService{

	googleUser: gapi.auth2.GoogleUser;
	googleUserChanged = new Subject<gapi.auth2.GoogleUser>();

	signIn(event: GoogleSignInSuccess) {
		console.log('User has signed in!');
		this.googleUser = event.googleUser;
		this.googleUserChanged.next(this.googleUser);
	}

	signOut() {
		this.googleUser = null;
		let auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function() {
			console.log('User has signed out!');
		});
		this.googleUserChanged.next(this.googleUser);
	}

}