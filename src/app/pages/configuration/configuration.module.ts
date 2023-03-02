import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationTableComponent } from './component/configuration-table';
import { ConfigurationFormComponent } from './component/configuration-form';
import { ConfigurationListComponent } from './page/configuration-list';
import { ConfigurationAddComponent } from './page/configuration-add';
import { ConfigurationEditComponent } from './page/configuration-edit';

@NgModule({
  declarations: [
    ConfigurationTableComponent,
    ConfigurationFormComponent,
    ConfigurationListComponent,
    ConfigurationAddComponent,
    ConfigurationEditComponent,
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
})
export class ConfigurationModule {}
