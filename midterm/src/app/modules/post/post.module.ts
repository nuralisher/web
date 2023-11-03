import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostRoutingModule} from "./post-routing.module";
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostAddComponent } from './post-add/post-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    PostListComponent,
    PostItemComponent,
    PostAddComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PostModule { }
