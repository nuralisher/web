import {Component, Input, OnInit} from '@angular/core';
import {MainService} from "../main.service";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() category: any;
  menu: any[] = [];

  constructor(
    private mainService: MainService,
  ) { }

  ngOnInit(): void {
    this.mainService.getCategoryMenuList(this.category.id).subscribe((res: any) => {
      this.menu = res;
    })
  }

  getQuantity(menuItem: any) {
    return this.mainService.orderItems.find(el => el.menu === menuItem.id)?.quantity
  }
}
