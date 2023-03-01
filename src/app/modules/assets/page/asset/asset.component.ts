import { Component, OnInit } from '@angular/core';
import { DBAsset } from "../../data/db-asset";
import { IAsset } from "../../shared/model/asset.model";
import { ModalService } from "../../../../components/modal/service/modal.service";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  public dataTable: IAsset[] = [];
  public isSort: boolean;
  public openModal: boolean;

  constructor(
    private modal: ModalService
  ) {
  }

  ngOnInit(): void {
    this.getAssets();
  }

  private getAssets(): void {
    this.dataTable = DBAsset;
  }

  public search(keyword: string) {
    console.log(keyword)
    if(!keyword) {
      this.getAssets();
    } else {
      this.dataTable = this.dataTable.filter(data => data.assetName.toLowerCase().includes(keyword));
    }
  }

  public sortData(state: boolean): void {
    this.isSort = state;

    if(this.isSort) {
      this.dataTable = this.dataTable.sort((asc: IAsset , desc: IAsset) => asc.id - desc.id);
    } else {
      this.dataTable = this.dataTable.sort((asc: IAsset , desc: IAsset) => desc.id - asc.id);
    }
  }

  public addAsset(): void {
    this.modal.open = true;
  }
}
