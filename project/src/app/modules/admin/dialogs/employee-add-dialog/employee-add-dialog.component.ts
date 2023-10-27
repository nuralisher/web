import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../admin.service";
import {MatDialogRef} from "@angular/material/dialog";
import {positions} from "../../../../shared/consts/positions";
import {positionRU} from "../../../../shared/enums/position.enum";

@Component({
  selector: 'app-employee-add-dialog',
  templateUrl: './employee-add-dialog.component.html',
  styleUrls: ['./employee-add-dialog.component.scss']
})
export class EmployeeAddDialogComponent implements OnInit {
  searchTimoutId: any = null;
  employees: any[] = [];
  loading = false;
  selectedEmployee: any = {};
  positions = positions;
  positionRU = positionRU;
  position = null;

  constructor(
    private adminService: AdminService,
    private dialogRef: MatDialogRef<EmployeeAddDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  onSearch(event: any) {
    const search = event.target.value;
    this.searchTimoutId && clearTimeout(this.searchTimoutId);
    if (!search) {
      this.employees = [];
      this.selectedEmployee = {}
      return;
    }
    this.searchTimoutId = setTimeout(() => {
      this.adminService.getEmployees(search).subscribe((res: any) => {
        this.employees = res;
        this.selectedEmployee = {}
      })
    }, 300)
  }

  onSubmit() {
    this.loading = true;
    this.adminService.addRestaurantEmployee(this.selectedEmployee.id, this.position).subscribe(res => {
      this.loading = false;
      this.dialogRef.close();
    })
  }

  selectEmployee(employee: any) {
    this.selectedEmployee = employee;
  }
}
