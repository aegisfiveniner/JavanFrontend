import { Component, EventEmitter, Output } from '@angular/core';
import { icons } from "../../../core/const/image.const";


@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {

  @Output()
  public OnSearch: EventEmitter<string>;

  @Output()
  public OnSort: EventEmitter<Event>;

  public icon = icons;
  public download = './assets/file/download-sample.xlsx';
  public keyword: string = '';

  constructor() {
    this.OnSearch = new EventEmitter<string>();
    this.OnSort = new EventEmitter<Event>();
  }

  public search(): void {
    this.OnSearch.emit(this.keyword)
  }

  public sort():void {
    this.OnSort.emit()
  }
}
