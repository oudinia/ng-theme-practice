import {Routes} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';

import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {RecoverComponent} from './pages/recover/recover.component';
import {LockComponent} from './pages/lock/lock.component';
import {MaintenanceComponent} from './pages/maintenance/maintenance.component';
import {Error404Component} from './pages/error404/error404.component';
import {Error500Component} from './pages/error500/error500.component';

export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: 'mehdi', loadChildren: () => import('./mehdi/mehdi/mehdi.module').then(m => m.MehdiModule)},
      {path: 'Morocco', loadChildren: () => import('./Morocco/morocco/morocco.module').then(m => m.MoroccoModule)},
      {path: 'Spain', loadChildren: () => import('./Spain/spain/spain.module').then(m => m.SpainModule)},
      {path: 'Portugal', loadChildren: () => import('./Portugal/portugal/portugal.module').then(m => m.PortugalModule)},
      {path: 'France', loadChildren: () => import('./France/france/france.module').then(m => m.FranceModule)},
      {path: 'Belgium', loadChildren: () => import('./Belgium/belgium/belgium.module').then(m => m.BelgiumModule)},
      {path: 'Usa', loadChildren: () => import('./Usa/usa.module').then(m => m.UsaModule)},
      {path: 'cities', loadChildren: () => import('./cities/cities/cities.module').then(m => m.CitiesModule)},
      {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)},
      {path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)},
      {path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)},
      {path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)},
      {path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)},
      {path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)},
      {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
      {path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule)},
      {path: 'extras', loadChildren: () => import('./extras/extras.module').then(m => m.ExtrasModule)}
    ]
  },

  // Not lazy-loaded features
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recover', component: RecoverComponent},
  {path: 'lock', component: LockComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: '404', component: Error404Component},
  {path: '500', component: Error500Component},

  // Not found
  {path: '**', redirectTo: 'home'}

];
