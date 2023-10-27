import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeAddDialogComponent} from "../dialogs/employee-add-dialog/employee-add-dialog.component";
import {positionRU} from "../../../shared/enums/position.enum";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees = [];
  employeesColumns = [
    { name: 'full_name', title: 'ФИО' },
    { name: 'email', title: 'E-mail' },
    { name: 'position', title: 'Должность' },
  ];
  employeesColumnsToDisplay = [...this.employeesColumns.map(col => col.name), 'delete'];
  positionRU: any = positionRU;

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminService.getRestaurantEmployees().subscribe((res: any) => {
      this.employees = res;
    })
  }

  deleteEmployee(employee: any) {
    this.adminService.deleteEmployee(employee.position, employee.id).subscribe(res => {
      this.adminService.getRestaurantEmployees().subscribe((res: any) => {
        this.employees = res;
      })
    })
  }

  addEmployee() {
    this.dialog.open(EmployeeAddDialogComponent, {
      panelClass: 'custom-dialog',
    }).afterClosed().subscribe(data => {
      this.adminService.getRestaurantEmployees().subscribe((res: any) => {
        this.employees = res;
      })
    })
  }
}
