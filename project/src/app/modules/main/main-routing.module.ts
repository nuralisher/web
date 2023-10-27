import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";
import {ScanPageComponent} from "./scan-page/scan-page.component";
import {MenuComponent} from "./menu/menu.component";
import {MenuDetailComponent} from "./menu-detail/menu-detail.component";
import {ConfirmOrderComponent} from "./confirm-order/confirm-order.component";
import {AuthGuard} from "../../shared/guards/auth.guard";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: MainComponent,
    },
    {
      path: 'scan',
      component: ScanPageComponent,
    },
    {
      path: 'menu',
      component: MenuComponent,
    },
    {
      path: 'menu/:id',
      component: MenuDetailComponent,
    },
    {
      path: 'confirm-order',
      component: ConfirmOrderComponent,
      // canActivate: [AuthGuard]
    }
  ])]
})
export class MainRoutingModule { }
