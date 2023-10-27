import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {tap} from "rxjs";
import {SharedService} from "../../shared/services/shared.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = {}

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  authorize(username: string, password: string) {
    return this.http.get('assets/mocks/login.json').pipe(
      tap((res: any) => {localStorage.setItem('auth-token', res.key)}),
      tap(res => {
        this.me().subscribe(res => {
          this.user = res;
          this.user.is_client ? this.router.navigate(['/menu']) : this.router.navigate(['/admin/restaurants'])
        })
      })
    );
    return this.http.get('assets/mocks/empty.json').pipe(
      tap((res: any) => {localStorage.setItem('auth-token', res.key)}),
      tap(res => {
        this.me().subscribe(res => {
          this.user = res;
          this.user.is_client ? this.router.navigate(['/menu']) : this.router.navigate(['/admin/restaurants'])
        })
      })
    );
    return this.http.post(`${environment.apiUrl}/auth/login/`, {username, password, email: ""}).pipe(
      tap((res: any) => {localStorage.setItem('auth-token', res.key)}),
      tap(res => {
        this.me().subscribe(res => {
          this.user = res;
          this.user.is_client ? this.router.navigate(['/menu']) : this.router.navigate(['/admin/restaurants'])
        })
      })
    )
  }

  employeeRegistration(data: EmployeeRegistrationCredentials) {
    return this.http.get('assets/mocks/empty.json');
    return this.http.post(`${environment.apiUrl}/user/employee/registration/`, data).pipe(
      tap((res: any) => {localStorage.setItem('auth-token', res.key)}),
      tap(res => {
        this.me().subscribe(res => {
          this.user = res;
          this.user.is_client ? this.router.navigate(['/menu']) : this.router.navigate(['/admin/restaurants'])
        })
      })
    )
  }

  clientRegistration(data: any) {
    return this.http.get('assets/mocks/empty.json');
    return this.http.post(`${environment.apiUrl}/user/client/registration/`, data).pipe(
      tap((res: any) => {localStorage.setItem('auth-token', res.key)})
    )
  }

  logout() {
    return this.http.get('assets/mocks/empty.json');
    return this.http.post(`${environment.apiUrl}/auth/logout/`, {}).pipe(
      tap(() => {
        this.user = {}
        localStorage.removeItem('auth-token');
      })
    );
  }


  me() {
    // return this.http.get('assets/mocks/empty.json');
    // return this.http.get('assets/mocks/me_client.json');
    return this.http.get('assets/mocks/me_not_client.json');
    return this.http.get(`${environment.apiUrl}/me/`);
  }
}


interface EmployeeRegistrationCredentials {
  username: string,
  email: string,
  password1: string,
  password2: string,
  first_name: string,
  last_name: string,
}
