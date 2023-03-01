import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeDashboardComponent } from './page/home-dashboard/home-dashboard.component';
import { ComponentModule } from "../../components/component.module";
import { InfoSparepartComponent } from './component/info-sparepart/info-sparepart.component';
import { InfoAssetsComponent } from './component/info-assets/info-assets.component';
import { PipeModule } from "../../shared/pipe/pipe.module";
import { InfoMaintenanceComponent } from './component/info-maintenance/info-maintenance.component';


@NgModule({
  declarations: [
    HomeDashboardComponent,
    InfoSparepartComponent,
    InfoAssetsComponent,
    InfoMaintenanceComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentModule,
    PipeModule
  ]
})
export class MainModule { }
