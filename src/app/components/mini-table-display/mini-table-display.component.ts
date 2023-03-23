import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-mini-table-display',
  templateUrl: './mini-table-display.component.html',
  styleUrls: ['./mini-table-display.component.scss'],
})
export class MiniTableDisplayComponent implements OnInit {
  @ViewChild('table', { static: true }) table!: MatTable<any>;
  @Input() data: string = '';
  @Input() title: string = '';
  @Input() columns: any = [];
  @Input() dataSource: any;
  @Input() displayedColumns = [];
  desc: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  buttonSortData(property: string) {
    let sortedData;
    if (!this.desc) {
      sortedData = this.dataSource.sort(function (a: any, b: any) {
        if (a[property] < b[property]) {
          return -1;
        } else if (a[property] > b[property]) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      sortedData = this.dataSource.sort(function (a: any, b: any) {
        if (a[property] < b[property]) {
          return 1;
        } else if (a[property] > b[property]) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    this.desc = !this.desc;
    this.dataSource = sortedData;
    this.table.renderRows();
  }
}
