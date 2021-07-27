import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  async checkAuthenticated(): Promise<boolean> {
    const authenticated = true;
    this.isAuthenticated.next(true);
    return authenticated;
  }

  async login(username: string, password: string): Promise<void> {
    const transaction = 'SUCCESS'

    if (transaction != 'SUCCESS') {
      throw Error('We cannot handle the status');
    }
    this.isAuthenticated.next(true);
    this.router.navigate(['/']);
  }
}
