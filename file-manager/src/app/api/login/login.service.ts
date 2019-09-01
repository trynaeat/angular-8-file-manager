import { Injectable } from '@angular/core';
import { ApiConfig } from '../api-configuration';
import { HttpClient } from '@angular/common/http';

const endpoint = 'login';

export interface LoginRequestParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  token?: string;
  msg?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private config: ApiConfig,
    private http: HttpClient,
  ) { }

  public requestLogin(params: LoginRequestParams) {
    return this.http.post<LoginResponse>(`${this.config.baseUrl}/${endpoint}`, params);
  }
}
