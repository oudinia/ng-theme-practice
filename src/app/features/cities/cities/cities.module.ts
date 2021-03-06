import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {CitiesComponent} from './cities.component';
import {SharedModule} from '../../../shared/shared.module';





const routes: Routes = [
  {path: '', component: CitiesComponent},
];

@NgModule({
  declarations: [CitiesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],

})
export class CitiesModule {
}
