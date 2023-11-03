import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PostListComponent} from "./post-list/post-list.component";
import {PostItemComponent} from "./post-item/post-item.component";
import {PostAddComponent} from "./post-add/post-add.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: 'post/add',
    component: PostAddComponent,
  },
  {
    path: 'post/:id',
    component: PostItemComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {}
