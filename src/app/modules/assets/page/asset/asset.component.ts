import { Component, OnInit } from '@angular/core';
import { DBAsset } from "../../data/db-asset";
import { IAsset } from "../../shared/model/asset.model";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  public dataTable: IAsset[] = [];

  ngOnInit(): void {
    this.getAssets();
  }

  private getAssets(): void {
    this.dataTable = DBAsset;
  }

  public search(keyword: string) {
    if(!keyword) {
      this.getAssets();
    }
    this.dataTable = this.dataTable.filter(data => data.assetName.toLowerCase().includes(keyword));
  }

  public sortData(): void {
    this.dataTable = this.dataTable.sort((asc: IAsset , desc: IAsset) => desc.id = asc.id);
  }
}
