import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configuration-edit',
  templateUrl: './configuration-edit.component.html',
  styleUrls: ['./configuration-edit.component.scss'],
})
export class ConfigurationEditComponent implements OnInit {
  public id!: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.queryParams['id'];
  }
}
