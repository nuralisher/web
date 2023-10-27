import { Component, OnInit } from '@angular/core';
import {CreateCategoryDialogComponent} from "../dialogs/create-category-dialog/create-category-dialog.component";
import {AdminService} from "../admin.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {
  categories: any[] = [];
  menus = [];
  columns = [
    {title: 'Фото', name: 'image'},
    {title: 'Название', name: 'name'},
    {title: 'Описание', name: 'description'},
    {title: 'Цена', name: 'price'},
  ];
  columnsToDisplay = [...this.columns.map(c => c.name), 'action'];
  selectedCategoryId = 'ALL';

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.selectCategory('ALL');
    this.fetchCategories();
  }

  fetchCategories() {
    this.adminService.getRestaurantCategories().subscribe((res: any) => {
      this.categories = res;
    })
  }


  openAddDialog() {
    this.dialog.open(CreateCategoryDialogComponent,
      {
        panelClass: 'custom-dialog',
        data: {
          categories: this.categories,
        }
      }
    ).afterClosed().subscribe(res => {
      if (res) {
        this.fetchCategories();
      }
    });
  }

  removeCategory(id: string) {
    this.adminService.removeCategory(id).subscribe(res => {
      this.fetchCategories();
    })
  }

  deleteMenu(id: string) {

  }

  selectCategory(categoryId: string) {
    this.selectedCategoryId = categoryId;
    this.getMenu();
  }

  getMenu() {
    if(this.selectedCategoryId === 'ALL') {
      this.adminService.getRestaurantMenus().subscribe((res: any) => {
        this.menus = res;
      })
    } else {
      this.adminService.getCategoryMenus(this.selectedCategoryId).subscribe((res: any) => {
        this.menus = res;
      })
    }
  }
}
