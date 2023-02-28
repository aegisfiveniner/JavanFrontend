import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
