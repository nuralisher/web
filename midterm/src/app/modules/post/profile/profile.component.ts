import { Component } from '@angular/core';
import {PostService} from "../../post.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  editMode = false;
  name = new FormControl('');
  surname = new FormControl('');
  email = new FormControl('');

  constructor(public postService: PostService) {
  }

  edit() {
    this.name.setValue(this.postService.profile.name);
    this.surname.setValue(this.postService.profile.surname);
    this.email.setValue(this.postService.profile.email);
    this.editMode = true;
  }

  save() {
    this.postService.profile.name = this.name.value?.trim() || this.postService.profile.name;
    this.postService.profile.surname = this.surname.value?.trim() || this.postService.profile.surname;
    this.postService.profile.email = this.email.value?.trim() || this.postService.profile.email;
    this.editMode = false;
  }
}
