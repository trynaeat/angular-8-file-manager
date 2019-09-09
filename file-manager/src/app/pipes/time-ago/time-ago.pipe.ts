import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, mergeMap, takeUntil } from 'rxjs/operators';
import { DateTime, DurationUnit } from 'luxon';

const units: {
  name: DurationUnit;
  updateTime: number;
}[] = [
  {
    name: 'days',
    updateTime: 1000 * 60 * 60 * 24, // One day
  },
  {
    name: 'hours',
    updateTime: 1000 * 60 * 60, // One hour
  },
  {
    name: 'minutes',
    updateTime: 1000 * 60, // One minute
  },
  {
    name: 'seconds',
    updateTime: 1000 * 10 // 10 seconds
  }
];

@Pipe({
  name: 'timeAgo',
  pure: false,
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {

  private destroy$ = new Subject();
  private update$ = new Subject<number>();
  private hasInitialized = false;
  private currentValue: string;

  public ngOnDestroy() {
    this.destroy$.next();
  }

  transform(value: Date, ...args: any[]): any {
    if (this.hasInitialized) {
      return this.currentValue;
    }
    this.update$.pipe(
      mergeMap(timeout => of(timeout).pipe(
        delay(timeout),
      )),
      takeUntil(this.destroy$),
    )
    .subscribe(() => {
      this.currentValue = this.updateTime(value);
    });
    this.update$.next(0);
    this.hasInitialized = true;
  }

  private updateTime(value: Date) {
    const now = DateTime.local();
    const then = DateTime.fromJSDate(value);
    const diff = now.diff(then, ['days', 'hours', 'minutes', 'seconds']);
    for (const unit of units) {
      const count = Math.floor(diff[unit.name]);
      if (unit.name === 'seconds') {
        if (count < 30) {
          this.update$.next(unit.updateTime);
          return 'just now';
        }
        this.update$.next(unit.updateTime);
        return `${count} ${unit.name} ago`;
      }

      if (count >= 1) {
        this.update$.next(unit.updateTime);
        return `${count} ${count > 1 ? unit.name : unit.name.slice(0, -1)} ago`;
      }
    }
  }

}
