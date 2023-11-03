import {Component, OnInit} from '@angular/core';
import {PostService} from "../../post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  constructor(public postService: PostService, private router: Router) {
  }

  like(id: any) {
    const post = this.postService.posts.find((post: any) => post.id === id);
    if (post.liked) {
      post.liked = false;
      post.like -= 1
    } else {
      post.liked = true;
      post.like += 1;
    }
  }

  dislike(id: any) {
    const post = this.postService.posts.find((post: any) => post.id === id);
    if (post.disliked) {
      post.disliked = false;
      post.dislike -= 1
    } else {
      post.disliked = true;
      post.dislike += 1;
    }
  }

  navToPostItem(id: any) {
    this.router.navigate(['post/' + id]);
  }

  addPost() {
    this.router.navigate(['post/add']);
  }

  toProfile() {
    this.router.navigate(['profile']);
  }
}
