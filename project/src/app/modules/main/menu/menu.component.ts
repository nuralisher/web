import {Component, HostListener, OnInit} from '@angular/core';
import {MainService} from "../main.service";
import {MatDialog} from "@angular/material/dialog";
import {CallDialogComponent} from "../dialogs/call-dialog/call-dialog.component";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = [];
  categories: any = [];
  showDropdown = false;

  constructor(
    public mainService: MainService,
    private dialog: MatDialog,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.mainService.getRestaurantCategories().subscribe(res => {
      this.categories = res;
    })
  }

  openCallDialog() {
    this.dialog.open(CallDialogComponent)
  }


  @HostListener('window:click', ['$event'])
  onClick(event: any) {
    this.showDropdown = false;
  }

  logout() {
    this.authService.logout().subscribe()
  }
}
