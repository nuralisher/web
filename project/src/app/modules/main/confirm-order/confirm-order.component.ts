import { Component, OnInit } from '@angular/core';
import {MainService} from "../main.service";
import {MatDialog} from "@angular/material/dialog";
import {SuccessOrderComponent} from "../success-order/success-order.component";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {
  loading = false;
  comment = ''

  constructor(
    public mainService: MainService,
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.mainService.orderItems = this.mainService.orderItems.sort((a: any, b: any) => Number(a.sort) - Number(b.sort))
  }

  changeQuantity(change: number, order: any) {
    this.mainService.orderItems = this.mainService.orderItems.filter(el => el.menu!==order.menu);
    if(order.quantity !== 1 || change > 0)
    this.mainService.orderItems.push({
      ...order,
      quantity: order.quantity + change
    });

    if(this.mainService.orderItems.length===0) {
      this.router.navigate(['/menu']);
    }
    this.mainService.totalCost += change*order.price;
    this.mainService.orderItems = this.mainService.orderItems.sort((a: any, b: any) => Number(a.sort) - Number(b.sort))
  }

  confirmOrder() {
    // if(!this.authService.user.id) {
    //   this.router.navigate(['/auth/sign-in', {redirect: 'confirm-order'}])
    // }
    this.loading = true;
    this.mainService.createOrder(this.comment).subscribe(res => {
      this.loading = false;
      this.mainService.orderItems = []
      this.mainService.totalCost = 0;
      this.dialog.open(SuccessOrderComponent)
    }, error => {
      this.loading = false;
    })
  }
}
