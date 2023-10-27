import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: any;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.adminService.getOrder(this.route.snapshot.params['id']).subscribe((res: any) => {
      this.order = res;
    })
  }

  getTotalPrice() {
    let total = 0;
    this.order.order_items.forEach((item: any) => {
      total += item.price;
    })
    return total;
  }
}
