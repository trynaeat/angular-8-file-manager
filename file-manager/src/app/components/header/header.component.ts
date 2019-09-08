import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showUserMenu = false;
  public expanded = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  /** Fire when user clicks hamburger icon, expand/collapse on mobile */
  public toggleVisible() {
    this.expanded = !this.expanded;
  }

  public logout() {
    this.showUserMenu = false;
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }

}
