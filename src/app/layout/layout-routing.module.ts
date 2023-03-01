import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { AuthGuard } from "../core/guard/auth.guard";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        redirectTo: 'assets',
        pathMatch: 'full'
      },
      {
        path: 'assets',
        loadChildren: () => import('../modules/assets/assets.module').then(m => m.AssetsModule),
        data: {
          activeTab: 'assets'
        }
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'assets'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
