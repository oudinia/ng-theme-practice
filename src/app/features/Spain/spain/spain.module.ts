import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpainComponent} from "./spain.component";
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: SpainComponent },
];
@NgModule({
  declarations: [SpainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SpainModule { }
