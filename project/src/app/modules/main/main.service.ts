import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {tap} from "rxjs";
import {Router} from "@angular/router";
import {ECallType} from "../../shared/enums/call-type.enum";
import {ECallStatus} from "../../shared/enums/call-status.enum";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  table: any;
  selectedCategoryId = 0;
  orderItems: any[] = []
  totalCost = 0;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    if (!this.table) {
      this.router.navigate([''])
    }
  }

  getTable(id: string) {
    return this.http.get('assets/mocks/table.json').pipe(
      tap(res => {
        this.table = res;
      })
    );
    return this.http.get(`${environment.apiUrl}/tables/${id}/`).pipe(
      tap(res => {
        this.table = res;
      })
    );
  }

  getCategoryMenuList(categoryId: string) {
    return this.http.get(`assets/mocks/menus.json/`);
    return this.http.get(`${environment.apiUrl}/menu-categories/${categoryId}/menus/`);
  }

  getMenuDetail(id: string) {
    return this.http.get(`assets/mocks/menu-detail.json/`);
    return this.http.get(`${environment.apiUrl}/menus/${id}/`);
  }

  getRestaurantById(id: string) {
    return this.http.get(`${environment.apiUrl}/restaurants/${id}/`)
  }

  getRestaurantCategories() {
    return this.http.get(`assets/mocks/menu-categories.json`);
    return this.http.get(`${environment.apiUrl}/restaurants/${this.table.restaurant}/menu-categories`);
  }

  createOrder(comment: string) {
    return this.http.get(`assets/mocks/orders.json`, );
    return this.http.post(`${environment.apiUrl}/orders/`, {
      restaurant: this.table.restaurant,
      comment,
      table_id: this.table.id,
      order_items: this.orderItems.map(el => ({menu: el.menu, quantity: el.quantity}))
    });
  }

  createCall(type: ECallType) {
    return this.http.get(`assets/mocks/call.json`);
    return this.http.post(`${environment.apiUrl}/tables/${this.table.id}/call/`, {
      restaurant: this.table.restaurant,
      status: ECallStatus.OPEN,
      type: type
    })
  }

  getCallStatus() {
    return this.http.get(`assets/mocks/empty.json`);
    return this.http.get(`${environment.apiUrl}/tables/${this.table.id}/call/`)
  }

  cancelCall() {
    return this.http.get(`assets/mocks/call.json`);
    return this.http.put(`${environment.apiUrl}/tables/${this.table.id}/call/`, {})
  }
}
