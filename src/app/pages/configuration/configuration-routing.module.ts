import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationAddComponent } from './page/configuration-add';
import { ConfigurationEditComponent } from './page/configuration-edit';
import { ConfigurationListComponent } from './page/configuration-list';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationListComponent,
  },
  {
    path: 'add',
    component: ConfigurationAddComponent,
  },
  {
    path: 'edit',
    component: ConfigurationEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
