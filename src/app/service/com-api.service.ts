import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, take } from 'rxjs';
import {
  PostDeleteAction,
  PostListErrorAction,
  PostListRequestAction,
  PostListSuccessAction,
  PostUpdateAction,
} from '../actions/post-action';
import {
  ProfileListErrorAction,
  ProfileListRequestAction,
  ProfileListSuccessAction,
} from '../actions/profile-action';
import { Post, Profile } from '../models/post';
import {
  getPostLoaded,
  getPostLoading,
  getPosts,
  RootReducerState,
  getPostsError,
  getUserProfile,
  getProfileLoading,
  getProfileLoaded,
  getProfileError,
} from '../reducers';

import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class ComApiService {
  constructor(
    private router: Router,
    private service: SharedService,
    private store: Store<RootReducerState>
  ) {}

  deletePost(id: number) {
    alert('post will be deleted ');
    //here forst we call actual delete api
    this.store.dispatch(new PostDeleteAction({ id }));
    this.service.deletePost(id);
    this.router.navigate(['/dashboard']);
  }
  editPost(formData: any, id: number) {
    const getPostsData = this.store.select(getPosts);

    // let posts = [];
    // for (let post of posts) {
    //   if (post.id === action.payload.id) {
    //     post.title = action.payload.data.title;
    //     post.description = action.payload.data.description;
    //     post.picture = action.payload.data.picture;
    //   }
    // }
    this.service.upDatePost(formData, id).subscribe((res: any) => {
      let apiRes = res.data;
      console.log('apires here', apiRes);
      getPostsData.subscribe((res) => {
        // console.log('res in comapi', res);
        let posts = res;
        for (let post of posts) {
          if (post.id === id) {
            console.log('matched');
            console.log('before ', post);

            // post = { ...apiRes };
            post = { ...post, title: apiRes.title };
            console.log('after ', post);
            this.store.dispatch(new PostUpdateAction({ data: post, id: id }));
            // post.title = apiRes.title;
            // post.description = apiRes.description;
            // post.picture = apiRes.picture;
          }
          console.log('posts are now in loop', posts);
        }
        console.log('posts are now ', posts);
      });
      // console.log('res in edit comp', res);
      // this.store.dispatch(new PostUpdateAction({ data: res.data, id: id }));
    });
    alert('Post Updated Successfully');
    this.router.navigate(['dashboard']);
  }
  getPostList(
    force = false
  ): [Observable<boolean>, Observable<Post[]>, Observable<boolean>] {
    const Loading$ = this.store.select(getPostLoading);
    const Loaded$ = this.store.select(getPostLoaded);
    const getPostsData = this.store.select(getPosts);
    const getError$ = this.store.select(getPostsError);
    combineLatest([Loaded$, Loading$])
      // .pipe(take(1))
      .subscribe((data) => {
        if ((!data[0] && !data[1]) || force) {
          this.store.dispatch(new PostListRequestAction());
          this.service.getAllPost().subscribe(
            (res) => {
              this.store.dispatch(new PostListSuccessAction({ data: res }));
            },
            (error) => {
              this.store.dispatch(new PostListErrorAction());
            }
          );
        }
      });
    return [Loading$, getPostsData, getError$];
  }

  getProfileList(
    force = false
  ): [Observable<boolean>, Observable<Profile[]>, Observable<boolean>] {
    const Loading$ = this.store.select(getProfileLoading);
    const Loaded$ = this.store.select(getProfileLoaded);
    const getProfileData = this.store.select(getUserProfile);
    const getError$ = this.store.select(getProfileError);
    combineLatest([Loaded$, Loading$])
      .pipe(take(1))
      .subscribe((data) => {
        if ((!data[0] && !data[1]) || force) {
          this.store.dispatch(new ProfileListRequestAction());
          this.service.getAllProfiles().subscribe(
            (res) => {
              this.store.dispatch(new ProfileListSuccessAction({ data: res }));
            },
            (error) => {
              this.store.dispatch(new ProfileListErrorAction());
            }
          );
        }
      });
    return [Loading$, getProfileData, getError$];
  }
}
