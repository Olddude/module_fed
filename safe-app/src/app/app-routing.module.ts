import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'safe', pathMatch: 'full' },
  {
    path: 'safe',
    loadChildren: () => import('./safe/safe.module')
      .then(m => m.SafeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
