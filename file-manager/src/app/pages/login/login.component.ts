import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@api';
import { AuthService } from '@services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.loginService.requestLogin({
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value,
    })
    .subscribe(
      result => {
        this.authService.setToken(result.token);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
