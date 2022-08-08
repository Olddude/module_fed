import { Injectable } from '@angular/core';

@Injectable()
export class SafeService {

  constructor(
    private readonly storage: Storage
  ) { }

  login(): void {
    this.storage.setItem('username', 'admin');
    this.storage.setItem('password', 'password');
  }

  print(): string {
    return JSON.stringify(this.storage, null, 2);
  }

}
