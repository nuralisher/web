import { Component } from '@angular/core';
import {PostService} from "../../post.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent {
  title = new FormControl('');
  body = new FormControl('');

  constructor(public postService: PostService, private router: Router, private location: Location) {
  }

  add()  {
    this.postService.posts.push({
      id: this.postService.posts.length + 1,
      title: this.title.value?.trim(),
      body: this.body.value?.trim(),
      like: 0,
      dislike: 0,
      liked: false,
      disliked: false,
      created: +(new Date())
    })
    this.location.back()
  }
}
