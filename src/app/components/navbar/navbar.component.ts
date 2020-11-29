import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isLoggedIn: boolean;
  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.as.isLogedIn();
  }

  logout() {
    localStorage.removeItem('mytoken');
    this.isLoggedIn = this.as.isLogedIn();//
    this.router.navigateByUrl('/')
  }
}
