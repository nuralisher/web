import {Component, HostListener, Input, OnInit} from '@angular/core';
import {AdminService} from "../admin.service";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropdown = false;
  showLogoutDropdown = false;

  constructor(
    public adminService: AdminService,
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  @HostListener('window:click', ['$event'])
  onClick(event: any) {
    this.showDropdown = false;
    this.showLogoutDropdown = false;
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.showLogoutDropdown = false;
      this.router.navigate(['/auth/sign-in'])
    })
  }
}
