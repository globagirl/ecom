import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    fb: FormBuilder, 
    private as: AuthService,
    private router: Router) {
    let loginFormControls = {
      username: new FormControl('', [Validators.required, Validators.email]), //('default value',[])
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    };

    this.loginForm = fb.group(loginFormControls); // liaison mabin login form wl form controls
  }

  ngOnInit(): void {}

  get myusername() {
    return this.loginForm.get('username');
  }
  get mypassword() {
    return this.loginForm.get('password');
  }

  loginUser() {
    let data = this.loginForm.value;
    let user = new User(null, null, data.username, data.password);
    
    console.log(user); //return value sous forme json

    //envoi data vers API
    this.as.loginUser(user).subscribe(
      (result) => {
        console.log(result);

        let token= result.token
        localStorage.setItem("mytoken",token) //local storage heya db mtaa navigateur

        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
