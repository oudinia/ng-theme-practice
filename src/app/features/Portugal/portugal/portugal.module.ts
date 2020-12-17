import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule} from "@angular/router";
import {PortugalComponent} from "./portugal.component";



const routes: Routes = [
  { path: '', component: PortugalComponent },
];
@NgModule({
  declarations: [PortugalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PortugalModule { }
