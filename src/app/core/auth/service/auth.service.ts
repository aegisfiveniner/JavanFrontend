import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public storeAccount(token: string): void {
    localStorage.setItem('abdullah.accessToken', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('abdullah.accessToken') ?? null;
  }

  public unauthorized(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
