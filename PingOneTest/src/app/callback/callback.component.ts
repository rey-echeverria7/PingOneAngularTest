import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [CommonModule],
  template: ` <div>Logged In</div> `,
})
export class CallbackComponent {
  constructor(private auth: AuthService) {
   
  }
}



/* import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  standalone: true,
  template: `<p>Loading...</p>`,
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.handleRedirectCallback().subscribe(() => {
      this.router.navigate(['/']); // Redirect 
    });
  }
}   */




/* import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  standalone: true,
  template: `<p>Loading...</p>`,
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  constructor(private oauthService: OAuthService, private router: Router) {}

  ngOnInit(): void {
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        this.router.navigate(['/']); // Redirect to home
      } else {
        
        console.error('Login failed');
      }
    });
  }
}  */