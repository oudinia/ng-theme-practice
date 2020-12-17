import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MehdiComponent} from "./mehdi.component";
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: MehdiComponent },
];

@NgModule({
  declarations: [MehdiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MehdiModule { }
