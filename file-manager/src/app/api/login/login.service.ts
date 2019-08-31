import { Injectable } from '@angular/core';
import { ApiConfig } from '../api-configuration';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private config: ApiConfig,
  ) { }
}
