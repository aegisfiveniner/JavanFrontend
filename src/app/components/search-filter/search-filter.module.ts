import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    SearchFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchFilterComponent
  ]
})
export class SearchFilterModule { }
