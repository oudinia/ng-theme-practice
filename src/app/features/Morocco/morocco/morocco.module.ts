import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoroccoComponent} from "./morocco.component";
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: MoroccoComponent },
];

@NgModule({
  declarations: [MoroccoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MoroccoModule { }
