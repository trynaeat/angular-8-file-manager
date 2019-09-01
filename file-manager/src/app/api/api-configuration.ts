import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfig {
  public baseUrl: string;
}

export interface ApiConfigInterface {
  baseUrl: string;
}
