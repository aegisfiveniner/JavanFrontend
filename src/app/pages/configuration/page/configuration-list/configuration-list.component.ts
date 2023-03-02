import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableModel } from 'src/app/core/table/model';
import {
  ConfigurationListColumnConst,
  ConfigurationListLabelConst,
  DummyDataConfiguration,
} from '../../shared/const';

@Component({
  selector: 'app-configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.scss'],
})
export class ConfigurationListComponent implements OnInit {
  public table!: TableModel;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initTable();
  }

  private initTable(): void {
    this.table = new TableModel();
    this.table.dataSource.data = DummyDataConfiguration;
    this.table.totalData = DummyDataConfiguration.length;
    this.table.columns = ConfigurationListColumnConst;
    this.table.labels = ConfigurationListLabelConst;
  }

  public navigateToAdd(): void {
    this.router.navigate(['/configuration/add']);
  }
}
