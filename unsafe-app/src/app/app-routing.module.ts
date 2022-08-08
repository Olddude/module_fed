import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'unsafe', pathMatch: 'full' },
  {
    path: 'unsafe',
    loadChildren: () => import('./unsafe/unsafe.module')
      .then(m => m.UnsafeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
