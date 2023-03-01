import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip/chip.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ChipComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChipComponent,
    ModalComponent
  ]

})
export class ComponentModule { }
