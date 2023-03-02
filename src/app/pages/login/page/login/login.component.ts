import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/service';
import { LoginValidationConst } from '../../shared/const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public hide: boolean = true;
  public messageValidation: any;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.messageValidation = LoginValidationConst;

    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  public onSubmit(): void {
    this.form.markAllAsTouched();

    if (
      !this.form.valid &&
      this.form.get('username')?.value !== 'admin' &&
      this.form.get('password')?.value !== 'admin'
    ) {
      return;
    }

    const generateRandomString = Math.random().toString(36).substring(2, 7);
    this.authService.storeAccount(generateRandomString);
    this.router.navigateByUrl('/configuration');
  }
}
