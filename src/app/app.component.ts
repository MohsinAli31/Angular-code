import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  login = false;

  constructor(private router: Router, private service: SharedService) {
    console.log(
      'authenticated user isssssss',
      this.service.isAuthenticated(),
      'login issss',
      this.service.isLoggedIn
    );
    if (this.service.isAuthenticated()) {
      this.login = true;
    }
  }
  loginCheck() {}

  ngOnInit(): void {}
  title = 'blogSignup';
}
