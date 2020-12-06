import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;


  constructor(fb: FormBuilder, private as: AuthService,private router: Router) {
    let registerFormControls = {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', [Validators.required, Validators.email]), //('default value',[])
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    };

    this.registerForm = fb.group(registerFormControls);
  }

  ngOnInit(): void {}

  get myname() {
    return this.registerForm.get('name');
  }
  get myusername() {
    return this.registerForm.get('username');
  }
  get mypassword() {
    return this.registerForm.get('password');
  }
  get myconfpassword() {
    return this.registerForm.get('confirmPassword');
  }

  registerUser() {
    let data = this.registerForm.value;

    let user = new User(null, data.name, data.username, data.password);

    //console.log(user); //return value sous forme json

    //TODO: envoi data vers API

    this.as.registerUser(user).subscribe(
      (result) => {
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
