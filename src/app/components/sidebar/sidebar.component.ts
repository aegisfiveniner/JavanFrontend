import { Component, OnInit } from '@angular/core';
import { avatar, icons } from "../../core/image.const";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public photo = avatar;
  public icon = icons;

  constructor() { }

  ngOnInit(): void {
  }

}
