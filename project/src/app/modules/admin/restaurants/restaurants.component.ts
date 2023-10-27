import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateRestaurantDialogComponent} from "../dialogs/create-restaurant-dialog/create-restaurant-dialog.component";
import {Router} from "@angular/router";
import {positionRU} from "../../../shared/enums/position.enum";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants = [];
  myRestaurants = [];
  restaurantsColumns = [
    {name: 'name', title: 'Название ресторана'},
  ]
  myRestaurantsColumns = [
    {name: 'name', title: 'Название ресторана'},
    {name: 'position', title: 'Должность'},
  ]
  restaurantsColumnsToDisplay = [...this.restaurantsColumns.map(col => col.name), 'ask_access']
  myRestaurantsColumnsToDisplay = [...this.myRestaurantsColumns.map(col => col.name)]
  positionRU: any = positionRU

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.adminService.selectedRestaurant = null;
    this.adminService.getMyRestaurants().subscribe((res: any) => {
      this.myRestaurants = res;
    })
    this.adminService.getRestaurants().subscribe((res: any) => {
      this.restaurants = res;
    })
  }

  createRestaurantDialog() {
    this.dialog.open(CreateRestaurantDialogComponent, {panelClass: 'custom-dialog'}).afterClosed().subscribe(res => {
      if (res) {
        this.adminService.getMyRestaurants().subscribe((res: any) => {
          this.myRestaurants = res;
        })
        this.adminService.getRestaurants().subscribe((res: any) => {
          this.restaurants = res;
        })
      }
    });
  }

  selectRestaurant(element: any) {
    // localStorage.setItem('selected-restaurant', JSON.stringify(element));
    this.adminService.selectedRestaurant = element;
    this.router.navigate(['/admin/orders']);
  }
}
