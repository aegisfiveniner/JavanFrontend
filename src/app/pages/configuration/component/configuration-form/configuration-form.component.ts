import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ConfigurationValidationConst,
  DummyDataConfiguration,
} from '../../shared/const';
import { of } from 'rxjs';

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.scss'],
})
export class ConfigurationFormComponent implements OnInit {
  @Input()
  public id!: number;

  public form!: FormGroup;
  public messageValidation: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.messageValidation = ConfigurationValidationConst;

    this.initForm();
    this.setRecordToForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      details: new FormControl(null, Validators.required),
    });
  }

  private setRecordToForm(): void {
    if (!this.id) {
      return;
    }

    const selectedData = DummyDataConfiguration.find((t) => t.id === this.id);

    this.form.patchValue({
      id: selectedData?.id ?? '',
      name: selectedData?.name ?? '',
      type: selectedData?.type ?? '',
      details: selectedData?.details ?? '',
    });
  }

  public navigateToList(): void {
    this.router.navigate(['/configuration']);
  }

  public onSave(): void {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      return;
    }

    // Hit Endpoint here
    of([]).subscribe((_) => this.navigateToList());
  }
}
