import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  selectedRestaurant: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {

    if (!this.selectedRestaurant) {
      this.router.navigate(['/admin/restaurants'])
    }
  }

  getRestaurants() {
    return this.http.get('assets/mocks/restaurants.json');
    return this.http.get(`${environment.apiUrl}/restaurants/`);
  }

  getAllRestaurants() {
    return this.http.get('assets/mocks/restaurants.json');
    return this.http.get(`${environment.apiUrl}/all-restaurants`);
  }

  getMyRestaurants() {
    return this.http.get('assets/mocks/restaurants.json');
    return this.http.get(`${environment.apiUrl}/my-restaurants/`);
  }

  createRestaurants(data: {name: string}) {
    return this.http.get(`assets/mocks/restaurant.json`);
    return this.http.post(`${environment.apiUrl}/restaurants/`, data)
  }

  getRestaurantTables() {
    return this.http.get(`assets/mocks/tables.json`);
    return this.http.get(`${environment.apiUrl}/restaurants/${this.selectedRestaurant.id}/tables/`);
  }

  createTable(data: {number: number}) {
    const payload = {
      ...data,
      restaurant: this.selectedRestaurant.id,
    };
    return this.http.get(`assets/mocks/empty.json`);
    return this.http.post(`${environment.apiUrl}/tables/`, payload);
  }

  deleteTable(tableId: string) {
    return this.http.get(`assets/mocks/empty.json`);
    return this.http.delete(`${environment.apiUrl}/tables/${tableId}/`)
  }

  getFile(url: string) {
    return this.http.get(`${'http://127.0.0.1:8000/api'}/image`, {params: {
      url,
      }, headers: { skip: 'true', 'Content-Type': 'image/svg+xml'}});
  }

  getRestaurantCategories() {
    return this.http.get(`assets/mocks/restaurant_categories.json`);
    return this.http.get(`${environment.apiUrl}/restaurants/${this.selectedRestaurant.id}/menu-categories/`);
  }

  createCategory({name}: any) {
    return this.http.get(`assets/mocks/empty.json`);
    return this.http.post(`${environment.apiUrl}/menu-categories/`, {name, restaurant: this.selectedRestaurant.id, menus: []})
  }

  removeCategory(id: string) {
    return this.http.get(`assets/mocks/empty.json`);
    return this.http.delete(`${environment.apiUrl}/menu-categories/${id}/`)
  }

  createMenu(form_data: FormData) {
    return this.http.get(`assets/mocks/empty.json`);
    return this.http.post(`${environment.apiUrl}/menus/`, form_data);
  }

  getRestaurantMenus() {
    return this.http.get(`assets/mocks/menus.json`);
    return this.http.get(`${environment.apiUrl}/restaurants/${this.selectedRestaurant.id}/menus/`);
  }

  getCategoryMenus(categoryId: string) {
    return this.http.get(`assets/mocks/menus.json`);
    return this.http.get(`${environment.apiUrl}/menu-categories/${categoryId}/menus/`)
  }

  getRestaurantOrders() {
    return this.http.get(`assets/mocks/orders.json`);
    return this.http.get(`${environment.apiUrl}/restaurants/${this.selectedRestaurant.id}/orders/`);
  }

  getOrder(id: string) {
    return this.http.get(`assets/mocks/order.json`);
    return this.http.get(`${environment.apiUrl}/orders/${id}/`)
  }

  getRestaurantEmployees() {
    return this.http.get(`assets/mocks/employees.json`);
    return this.http.get(`${environment.apiUrl}/restaurants/${this.selectedRestaurant.id}/employees/`);
  }

  addRestaurantEmployee(employeeID: number, position: string | null) {
    return this.http.get(`assets/mocks/empty.json`);
    return this.http.post(`${environment.apiUrl}/restaurants/${this.selectedRestaurant.id}/employees/`, {
      employeeID,
      position
    });
  }

  getEmployees(search: string = '') {
    return this.http.get(`assets/mocks/employees.json`);
    return this.http.get(`${environment.apiUrl}/employees/`, {
      params: {
        search,
        restaurant_id: this.selectedRestaurant.id,
      }});
  }

  deleteEmployee(position: string, employee_id: number) {
    return this.http.get(`assets/mocks/empty.json`);
    return this.http.delete(`${environment.apiUrl}/restaurants/employees/`, {
      body: {
        position,
        employee_id,
        restaurant_id: this.selectedRestaurant.id,
      }
    })
  }

  getCalls() {
    return this.http.get(`assets/mocks/calls.json`);
    return this.http.get(`${environment.apiUrl}/restaurants/${this.selectedRestaurant.id}/calls/`);
  }

  closeCall(tableID: string) {
    return this.http.get(`assets/mocks/empty.json`);
    return this.http.delete(`${environment.apiUrl}/tables/${tableID}/call/`, )
  }
}
