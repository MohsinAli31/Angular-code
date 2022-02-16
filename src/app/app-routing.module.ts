import { NgModule } from '@angular/core';
import { flush } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardsGuard } from './auth-guards.guard';
import { PostsComponent } from './posts/posts.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { CategoryComponent } from './category/category.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  { path: 'category', component: CategoryComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardsGuard],
  },
  {
    path: 'dashboard',
    component: PostsComponent,
  },

  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'createPost',
    component: CreatePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
