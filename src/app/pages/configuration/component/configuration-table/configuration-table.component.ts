import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TableModel } from 'src/app/core/table/model';

@Component({
  selector: 'app-configuration-table',
  templateUrl: './configuration-table.component.html',
  styleUrls: ['./configuration-table.component.scss'],
})
export class ConfigurationTableComponent {
  @Input()
  public table!: TableModel;

  constructor(private router: Router) {}

  public deleteDataById(id: number): void {
    this.table.dataSource.data = [
      ...this.table.dataSource.data.filter((data) => data.id !== id),
    ];
  }

  public navigateToEdit(id: number): void {
    this.router.navigate(['/configuration/edit'], {
      queryParams: {
        id,
      },
    });
  }
}
