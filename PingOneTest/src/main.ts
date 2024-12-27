import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { CallbackComponent } from './app/callback/callback.component';
import routes from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes),
    provideHttpClient(),
    ],
    
}).catch(err => console.error(err));  






/* import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { OAuthModule, OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { CallbackComponent } from './app/callback/callback.component';

export const authConfig: AuthConfig = {
  issuer: 'https://auth.pingone.com/29150bc2-4475-48dd-8b02-4256561167ef/as',
  redirectUri: window.location.origin + '/callback',
  clientId: 'c88fb314-c75e-401d-ae10-91fd860ccfc2',
  responseType: 'code',
  scope: 'openid profile email',
  showDebugInformation: true,
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'callback', component: CallbackComponent },
    ]),
    importProvidersFrom(
      OAuthModule.forRoot()
    ),
    {
      provide: AuthConfig,
      useValue: authConfig
    },
    OAuthService
  ],
}).catch(err => console.error(err));  */