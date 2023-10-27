import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MainService} from "../main.service";

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {
  menu: any;
  quantity = 1;
  addOrRemove = true;

  constructor(
    private route: ActivatedRoute,
    private mainService: MainService,
  ) { }

  ngOnInit(): void {
    const menuId = this.route.snapshot.params['id'];
    this.mainService.getMenuDetail(menuId).subscribe(res => {
      this.menu = res;
      const orderItem: any = this.mainService.orderItems.find((el: any) => el.menu === this.menu.id)
      if (orderItem) {
        this.quantity = orderItem.quantity;
      }
      this.checkStatus();
    })
  }


  changeQuantity(change: number) {
    this.quantity += change;
    this.checkStatus();
  }

  checkStatus() {
    const orderItem: any = this.mainService.orderItems.find((el: any) => el.menu === this.menu.id);
    if(orderItem) {
      this.addOrRemove = orderItem.quantity !== this.quantity
    } else {
      this.addOrRemove = true;
    }
  }



  removeOrderItem() {
    this.mainService.orderItems = this.mainService.orderItems.filter((el: any) => el.menu !== this.menu.id);
    this.checkStatus();
    this.mainService.totalCost -= this.menu.price * this.quantity;
  }

  addOrderItem() {
    this.removeOrderItem()
    this.mainService.orderItems.push({
      menu: this.menu.id,
      quantity: this.quantity,
      price: this.menu.price,
      name: this.menu.name,
      sort: new Date(),
    })
    this.mainService.totalCost += this.menu.price * this.quantity*2;
    this.checkStatus();
  }
}
