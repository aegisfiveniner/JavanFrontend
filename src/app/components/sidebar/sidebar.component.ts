import { Component } from '@angular/core';
import { avatar, icons } from "../../core/const/image.const";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public photo = avatar;
  public icon = icons;

}
