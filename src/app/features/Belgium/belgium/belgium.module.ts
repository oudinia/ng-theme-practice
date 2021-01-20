import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

import {BelgiumComponent} from "./belgium.component";


const routes: Routes = [
  { path: '', component: BelgiumComponent },
];
@NgModule({
  declarations: [BelgiumComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BelgiumModule { }
