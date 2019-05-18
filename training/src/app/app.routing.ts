import { RouterModule } from '@angular/router';
import {LoginComponent} from './components/day-05/login/login.component';
import {LandingPageComponent} from './components/day-05/landing-page/landing-page.component';
import {PortfolioComponent} from './components/day-05/portfolio/portfolio.component';
import {RegisterComponent} from './components/day-05/register/register.component';
import {UserDetailsComponent} from './components/day-05/user-details/user-details.component';

export const MyRouting = RouterModule.forRoot([
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'register', component: RegisterComponent },
]);
