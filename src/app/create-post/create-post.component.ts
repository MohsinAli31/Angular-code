import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: SharedService
  ) {
    console.log('service data create', this.service.loginUserId);
  }

  profileForm = this.fb.group({
    title: [''],
    description: [''],
    picture: [''],
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
    // console.log(
    //   'id from service',
    //   this.service.loginUserId,
    //   'username',
    //   this.service.userName,
    //   'username',
    //   this.service.username,
    //   'token',
    //   this.service.token
    // );
    this.service.createPosts(this.profileForm.value);
  }
  ngOnInit(): void {}
}
