import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alert$ = new Subject<string>();
  constructor() { }

  public showAlert(alert: string) {
    this.alert$.next(alert);
  }
}
