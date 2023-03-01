import { Component, OnInit } from '@angular/core';
import { IAsset } from "../../../assets/shared/model/asset.model";
import { DBAssetReview } from "../../shared/const/db-asset-review";
import { AssetConfigStatus } from "../../../assets/shared/class/asset-config-status.config";

@Component({
  selector: 'app-info-assets',
  templateUrl: './info-assets.component.html',
  styleUrls: ['./info-assets.component.scss']
})
export class InfoAssetsComponent implements OnInit {

  public assets: IAsset[];
  public statusConfig = new AssetConfigStatus();

  ngOnInit(): void {
    this.getAssets();
  }

  private getAssets(): void {
    this.assets = DBAssetReview;
  }
}
