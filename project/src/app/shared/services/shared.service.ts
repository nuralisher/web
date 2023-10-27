import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../modules/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.authService.me().subscribe(res => {
      this.authService.user = res;
    })
  }
}
