import { Injectable, OnInit } from '@angular/core';
import { config } from './config';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { request } from 'https';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService implements OnInit {
  constructor(private http: HttpClient, private router: Router) {
    this.loginUserId = this.getToken('id');
    this.token = this.getToken('token');
    console.log(' constructor', this.loginUserId);
  }

  isLoggedIn!: Boolean;
  username: any = '';
  userName: any;
  loginUserId: any;
  token: any;
  list: any = [];
  state =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11dHRhcmFiQGdtYWlsLmNvbSIsInVzZXJJZCI6MzIsImlhdCI6MTY0NDk3MzIxOCwiZXhwIjoxOTYwNTQ5MjE4fQ.tBk9PRoe2g0it4dp5TmMfzFCgeEm9NDBA11ly7XKgEU';

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: this.token,
  //   }),
  // };

  createPosts(formValues: any) {
    // const headers = {
    //   Authorization: 'Bearer token',
    //   Headers: this.token,
    // };

    this.http
      .post('http://localhost:8000/post/37/3/create', formValues, {
        headers: {
          Authorization:
            'Bearer ' +
            JSON.parse(localStorage.getItem('currentUser')!).accesstoken,
        },
      })
      .subscribe((res) => {
        console.log('res here', res);
      });
    //   headers: {
    //     Authorization: 'Bearer' + JSON.parse(localStorage.getItem('token')),
    //   },
    // })
    // .subscribe(
    //   (res) => {
    //     console.log('res from post create', res);
    //   },
    //   (error) => {
    //     console.log('header', this.token, 'error is', error);
    //   }
    // );
    // this.http
    //   .post(`${config.apiUrl}/${this.loginUserId}/"4"/login`)
    //   .subscribe((res) => {});

    // return this.http.get(`${config.apiUrl}/post/getAll`);
  }
  getPosts() {
    return this.http.get(`${config.apiUrl}/post/getAll`);
  }

  getLogin(values: any) {
    this.http.post(`${config.apiUrl}/user/login`, values).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem(
          'currentUser',
          JSON.stringify(res)
          // this.list.push(res);
          // const user = this.list.map((i: any) => {
          //   this.loginUserId = i.id;
          //   this.username = i.name;
          //   console.log('login user token is', i.access);
          //   return (this.token = i.accesstoken), (this.userName = i.email);
          //   // i.email === this.form.value.email &&
          // i.password === this.form.value.password;
        );

        alert('user Login Suuccessfull');
        // localStorage.setItem('token', JSON.stringify(this.token));
        // localStorage.setItem('id', this.loginUserId);
        // this.router.navigate(['/dashboard']);
        // this.service.user(this.userName);

        if (this.isAuthenticated()) {
          this.isLoggedIn = true;
        }

        // this.isLoggedIn = true;
        // console.log(
        //   'id',
        //   this.loginUserId,
        //   'username',
        //   this.userName,
        //   'username',
        //   this.username,
        //   'token',
        //   this.token
        // );
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }

  isAuthenticated() {
    console.log('token status user', this.getToken('token') !== null);
    return this.getToken('token') !== null;
    // console.log('shared service ', localStorage.getItem(username));
  }
  loggenIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  getToken(token: any) {
    return localStorage.getItem(token);
  }
  logOut(token: any) {
    localStorage.removeItem(token);
  }

  // user(email: any) {
  //   this.username = email;
  // }

  ngOnInit(): void {}
}
