import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  template: `<div>
      <h1>Welcome to PingOne Authentication</h1>
      <button (click)="login()">Login</button>
    </div>`
})
export class HomeComponent {
  constructor(private authService: AuthService) { }

  login() {
    this.authService.login();
  }
}


/* import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Welcome to PingOne Authentication</h1>
      <button (click)="login()">Login</button>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private auth: AuthService) {}

  login(): void {
    this.auth.loginWithRedirect();
  }
} 
 */




/* import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Welcome to PingOne Authentication</h1>
      <button (click)="login()">Login</button>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private auth: AuthService) {}

  login(): void {
    this.auth.loginWithRedirect();
  }
} */