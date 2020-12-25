import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FranceComponent} from "./france.component";
import {Routes, RouterModule} from "@angular/router";




const routes: Routes = [
  { path: '', component: FranceComponent },
];
@NgModule({
  declarations: [FranceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FranceModule { }
