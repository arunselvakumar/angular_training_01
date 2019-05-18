import { RouterModule } from '@angular/router';
import {PortfolioComponent} from './components/day-05/portfolio/portfolio.component';
import {UserDetailsComponent} from './components/day-05/user-details/user-details.component';

export const ChildRouting = RouterModule.forChild([
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
]);
