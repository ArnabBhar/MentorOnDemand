import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginName: any = 'guest';
  constructor() { }
}
