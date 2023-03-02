import { MatTableDataSource } from '@angular/material/table';

export class TableModel {
	public columns: any[];
	public dataSource: MatTableDataSource<any>;
	public labels: string[];
	public page: number;
	public pageSize: number;
	public totalData: number;

	constructor() {
		this.columns = [];
		this.dataSource = new MatTableDataSource();
		this.labels = [];
		this.page = 1;
		this.pageSize = 10;
		this.totalData = 0;
	}

	public getNumber(index: number, limit: number): number {
		return (this.page - 1) * limit + index;
	}

	public getPageIndex(): number {
		return this.page - 1;
	}

	public isEmpty(): boolean {
		return this.totalData === 0;
	}

	public setPage(page: number): void {
		this.page = page;
	}

	public setPageSize(size: number): void {
		this.pageSize = size;
	}

	public resetPage(): void {
		this.page = 1;
	}
}
