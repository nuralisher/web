import { Component } from '@angular/core';
import {PostService} from "../../post.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  post: any;
  editMode = false;
  title = new FormControl('');
  body = new FormControl('');

  constructor(private postService: PostService, route: ActivatedRoute, private location: Location) {
    this.post = postService.posts.find((p: any) => {
      return p.id === +route.snapshot.params['id']
    });
  }

  like() {
    const post = this.post;
    if (post.liked) {
      post.liked = false;
      post.like -= 1
    } else {
      post.liked = true;
      post.like += 1;
    }
  }

  dislike() {
    const post = this.post;
    if (post.disliked) {
      post.disliked = false;
      post.dislike -= 1
    } else {
      post.disliked = true;
      post.dislike += 1;
    }
  }

  delete() {
    this.postService.posts = this.postService.posts.filter((p: any) => p.id !== this.post.id)
    this.location.back();
  }

  save() {
    this.post.title = this.title.value?.trim();
    this.post.body = this.body.value?.trim();
    this.editMode = false;
  }

  edit() {
    this.editMode = true;
    this.title.setValue(this.post.title);
    this.body.setValue(this.post.body);
  }
}
