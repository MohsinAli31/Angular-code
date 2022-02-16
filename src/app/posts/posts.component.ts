import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private router: Router, private service: SharedService) {
    console.log('service data', this.service.loginUserId);
  }
  list: any = [];
  logout() {
    this.service.logOut('token');
    this.router.navigate(['/login']);
  }
  alert() {
    alert('button clicked');
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe((res) => {
      // const reformattedArray = res.map(({ key, value}) => ({ [key]: value }));

      this.list.push(res);
      console.log('list here is', this.list);

      // res.map((ele) => {
      //   console.log('');
      // });
      // res.map((i: any) => {
      //   return console.log('i here', i);
      //   // i.email === this.form.value.email &&
      //   // i.password === this.form.value.password;
      // });

      console.log('posts from service api', res);
    });
    // console.log('posts from service api', this.service.getPosts());
  }
}
