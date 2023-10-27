import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeSignUpComponent} from "../auth/employee-sign-up/employee-sign-up.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {AdminComponent} from "./admin.component";
import {AdminMainComponent} from "./admin-main/admin-main.component";
import {TablesComponent} from "./tables/tables.component";
import {AdminMenuComponent} from "./admin-menu/admin-menu.component";
import {MenuFormComponent} from "./menu-form/menu-form.component";
import {OrdersComponent} from "./orders/orders.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";
import {EmployeeComponent} from "./employee/employee.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'restaurants',
        component: RestaurantsComponent,
      },
      {
        path: '',
        component: AdminMainComponent,
        children: [
          {
            path: 'tables',
            component: TablesComponent,
          },
          {
            path: 'menu',
            component: AdminMenuComponent,
          },
          {
            path: 'menu/form',
            component: MenuFormComponent,
          },
          {
            path: 'menu/form/:id',
            component: MenuFormComponent,
          },
          {
            path: 'orders',
            component: OrdersComponent,
          },
          {
            path: 'orders/:id',
            component: OrderDetailComponent,
          },
          {
            path: 'employees',
            component: EmployeeComponent,
          }
        ]
      }
    ]
  },
  // {
  //   path: 'sign-up',
  //   component: EmployeeSignUpComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
