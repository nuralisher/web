import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {MainRoutingModule} from "./main-routing.module";
import {MatButtonModule} from "@angular/material/button";
import { ScanPageComponent } from './scan-page/scan-page.component';
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import { MenuComponent } from './menu/menu.component';
import {MatTabsModule} from "@angular/material/tabs";
import { MenuListComponent } from './menu-list/menu-list.component';
import {MatDialogModule} from "@angular/material/dialog";
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import {FormsModule} from "@angular/forms";
import { SuccessOrderComponent } from './success-order/success-order.component';
import {CallDialogComponent} from "./dialogs/call-dialog/call-dialog.component";



@NgModule({
  declarations: [
    MainComponent,
    ScanPageComponent,
    MenuComponent,
    MenuListComponent,
    MenuDetailComponent,
    ConfirmOrderComponent,
    SuccessOrderComponent,
    CallDialogComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatButtonModule,
    ZXingScannerModule,
    RouterModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
  ]
})
export class MainModule { }
