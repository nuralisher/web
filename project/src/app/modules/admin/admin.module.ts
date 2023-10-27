import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmployeeSignUpComponent } from '../auth/employee-sign-up/employee-sign-up.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { CreateRestaurantDialogComponent } from './dialogs/create-restaurant-dialog/create-restaurant-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import { AdminMainComponent } from './admin-main/admin-main.component';
import { TablesComponent } from './tables/tables.component';
import { CreateTableDialogComponent } from './dialogs/create-table-dialog/create-table-dialog.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { CreateCategoryDialogComponent } from './dialogs/create-category-dialog/create-category-dialog.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import {MatSelectModule} from "@angular/material/select";
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddDialogComponent } from './dialogs/employee-add-dialog/employee-add-dialog.component';
import { CallDetailComponent } from './dialogs/call-detail/call-detail.component';


@NgModule({
  declarations: [
    EmployeeSignUpComponent,
    RestaurantsComponent,
    AdminComponent,
    HeaderComponent,
    CreateRestaurantDialogComponent,
    AdminMainComponent,
    TablesComponent,
    CreateTableDialogComponent,
    AdminMenuComponent,
    CreateCategoryDialogComponent,
    MenuFormComponent,
    OrdersComponent,
    OrderDetailComponent,
    EmployeeComponent,
    EmployeeAddDialogComponent,
    CallDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
  ]
})
export class AdminModule { }
