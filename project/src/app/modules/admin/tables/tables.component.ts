import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateTableDialogComponent} from "../dialogs/create-table-dialog/create-table-dialog.component";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  tables = [];
  columns = [
    {title: '№ стола', name: 'number'},
  ];
  columnsToDisplay = [...this.columns.map(col => col.name), 'qr', 'action']

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.fetchTables();
  }

  fetchTables() {
    this.adminService.getRestaurantTables().subscribe((res: any) => {
      this.tables = res;
    })
  }

  openAddDialog() {
    this.dialog.open(CreateTableDialogComponent, {panelClass: 'custom-dialog'}).afterClosed().subscribe(res => {
      if(res) {
        this.fetchTables();
      }
    })
  }

  downloadQr(element: any) {
    let link = document.createElement('a');
    link.setAttribute('download', 'QR');
    link.setAttribute('target', '_blank');
    let source = '<?xml version="1.0" standalone="no"?>\r\n' + element.qr_code;
    let url = "data:image/svg+xml;charset=utf-8,"+ encodeURIComponent(source);
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
    // this.adminService.getFile(element.qr_code).subscribe(res => {
    //   debugger
    // })
  }

  deleteTable(id: string) {
    this.adminService.deleteTable(id).subscribe(res => {
      this.fetchTables();
    })
  }
}
