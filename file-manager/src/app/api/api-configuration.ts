import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfig {
}

export interface ApiConfigInterface {
  baseUrl: string;
}
