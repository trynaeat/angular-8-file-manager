import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
  createdAt?: Date;
  status: 'info' | 'warn' | 'danger';
  message: string;
  title: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public toast$ = new Subject<Toast>();

  constructor() { }

  public pushToast(toast: Toast) {
    this.toast$.next({
      ...toast,
      createdAt: new Date(),
    });
  }
}
