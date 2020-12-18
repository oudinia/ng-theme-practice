import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import {ColoradoComponent} from "./colorado/colorado.component";
import {OhioComponent} from "./Ohio/ohio/ohio.component";
import { AlabamaComponent } from './Alabama/alabama/alabama.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'Alabama', component: AlabamaComponent },
  { path: 'Colorado', component: ColoradoComponent },
  { path: 'Ohio', component: OhioComponent },
];
@NgModule({
  declarations: [
    AlabamaComponent,
    ColoradoComponent,
    OhioComponent,
    AlabamaComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsaModule { }
