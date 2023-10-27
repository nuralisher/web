import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
import {EPosition} from "../../../shared/enums/position.enum";

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {
  menuItems = [
    {
      title: 'Сотрудники',
      icon: 'employee',
      link: 'employees',
      disabled: !this.isAdmin(),
    },
    {
      title: 'Заказы',
      icon: 'orders',
      link: 'orders'
    },
    {
      title: 'Столы',
      icon: 'table',
      link: 'tables',
      disabled: !this.isAdmin(),
    },
    {
      title: 'Блюда',
      icon: 'food',
      link: 'menu',
      disabled: !this.isAdmin(),
    },
  ]

  constructor(
    private adminService: AdminService,
  ) { }

  ngOnInit(): void {
  }

  isAdmin(): boolean {
    return this.adminService.selectedRestaurant.position === EPosition.ADMIN
      || this.adminService.selectedRestaurant.position === EPosition.OWNER
  }
}
