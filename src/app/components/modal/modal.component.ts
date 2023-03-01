import { Component } from '@angular/core';
import { icons } from "../../core/const/image.const";
import { ModalService } from "./service/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {


  public open = this.modal.open$;
  public closeIcon = icons.close;

  constructor(private modal: ModalService) {
  }

  public close(): void {
    this.modal.open = false;
  }

}
