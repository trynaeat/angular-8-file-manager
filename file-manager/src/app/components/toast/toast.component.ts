import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ToastService } from './toast.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Toast } from '@components';
import * as _ from 'lodash-es';

@Component({
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
    transition('void <=> *', animate(500)),
    ]),
  ],
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  public toasts: Toast[] = [];

  private destroy$ = new Subject();

  constructor(
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.toastService.toast$.pipe(
      takeUntil(this.destroy$),
    )
    .subscribe(toast => {
      this.toasts.push(toast);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  public closeToast(toast: Toast) {
    _.remove(this.toasts, o => o === toast);
  }

}
