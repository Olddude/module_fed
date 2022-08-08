import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsafeComponent } from './unsafe.component';

const routes: Routes = [
  { path: '', component: UnsafeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsafeRoutingModule { }
