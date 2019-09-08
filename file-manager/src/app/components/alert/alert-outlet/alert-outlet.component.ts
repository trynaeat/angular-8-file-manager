import { Component, OnInit } from '@angular/core';
import { AlertService } from '@services';

@Component({
  selector: 'app-alert-outlet',
  templateUrl: './alert-outlet.component.html',
  styleUrls: ['./alert-outlet.component.scss']
})
export class AlertOutletComponent implements OnInit {
  public message: string;
  public hidden = true;

  constructor(
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.alertService.alert$
      .subscribe(msg => {
        this.hidden = false;
        this.message = msg;
      });
  }

}
