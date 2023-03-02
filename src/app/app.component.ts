import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) {
    if (authService.getToken()) {
      router.navigateByUrl('/configuration');
    }
  }
}
