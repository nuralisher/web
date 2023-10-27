import {Component, HostListener, OnInit} from '@angular/core';
import {AdminService} from "../admin.service";
import {callRU} from "../../../shared/enums/call-type.enum";
import {callStatusRU, ECallStatus} from "../../../shared/enums/call-status.enum";
import {MatDialog} from "@angular/material/dialog";
import {CallDetailComponent} from "../dialogs/call-detail/call-detail.component";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  calls: any[] = [];
  columns = [
    {name: 'table', title: '№ стола'},
    {name: 'created', title: 'Время заказа'},
    {name: 'client', title: 'Клиент'},
  ];
  callColumns = [
    {name: 'table', title: '№ стола'},
    {name: 'created', title: 'Время вызова'},
    {name: 'client', title: 'Клиент'},
    {name: 'type', title: 'Тип'},
    {name: 'status', title: 'Статус'},
  ];
  columnsToDisplay = [...this.columns.map(col => col.name)];
  callColumnsToDisplay = [...this.callColumns.map(col => col.name), 'close'];
  callRU: any = callRU;
  callStatusRU: any = callStatusRU;
  ECallStatus = ECallStatus;
  isMobile = false;

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (window.innerWidth < 500) {
      this.callColumns = [
        {name: 'table', title: '№ стола'},
        // {name: 'client', title: 'Клиент'},
        {name: 'type', title: 'Тип'},
        {name: 'status', title: 'Статус'},
      ]
      // this.callColumnsToDisplay = [...this.callColumns.map(col => col.name)];
      this.isMobile = true;
      this.callColumnsToDisplay = [...this.callColumns.map(col => col.name),];
    } else {
      this.callColumns = [
        {name: 'table', title: '№ стола'},
        {name: 'created', title: 'Время вызова'},
        {name: 'client', title: 'Клиент'},
        {name: 'type', title: 'Тип'},
        {name: 'status', title: 'Статус'},
      ]
      this.isMobile = false;
      this.callColumnsToDisplay = [...this.callColumns.map(col => col.name), 'close'];
    }
    this.adminService.getRestaurantOrders().subscribe((res: any) => {
      this.orders = res;
      this.orders = this.orders.sort((a: any, b: any) => {
        return Number(new Date(b.created)) - Number(new Date(a.created))
      })
    })
    this.adminService.getCalls().subscribe((res: any) => {
      this.calls = res;
      this.orders = this.orders.sort((a: any, b: any) => {
        return Number(new Date(b.created)) - Number(new Date(a.created))
      })
    })
  }

  closeCall(call: any) {
    this.adminService.closeCall(call.table_id).subscribe(res => {
      this.adminService.getCalls().subscribe((res: any) => {
        this.calls = res;
        this.orders = this.orders.sort((a: any, b: any) => {
          return Number(new Date(b.created)) - Number(new Date(a.created))
        })
      })
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth < 500) {
      this.callColumns = [
        {name: 'table', title: '№ стола'},
        // {name: 'client', title: 'Клиент'},
        {name: 'type', title: 'Тип'},
        {name: 'status', title: 'Статус'},
      ]
      // this.callColumnsToDisplay = [...this.callColumns.map(col => col.name)];
      this.isMobile = true;
      this.callColumnsToDisplay = [...this.callColumns.map(col => col.name),];
    } else {
      this.callColumns = [
        {name: 'table', title: '№ стола'},
        {name: 'created', title: 'Время вызова'},
        {name: 'client', title: 'Клиент'},
        {name: 'type', title: 'Тип'},
        {name: 'status', title: 'Статус'},
      ]
      this.isMobile = false;
      this.callColumnsToDisplay = [...this.callColumns.map(col => col.name), 'close'];
    }
  }

  openCallDetail(call: any) {
    console.log(call);
    this.dialog.open(CallDetailComponent, {
      data: call,
    }).afterClosed().subscribe(res => {
      this.adminService.getCalls().subscribe((res: any) => {
        this.calls = res;
        this.orders = this.orders.sort((a: any, b: any) => {
          return Number(new Date(b.created)) - Number(new Date(a.created))
        })
      })
    })
  }
}
