import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../admin.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-restaurant-dialog',
  templateUrl: './create-restaurant-dialog.component.html',
  styleUrls: ['./create-restaurant-dialog.component.scss']
})
export class CreateRestaurantDialogComponent implements OnInit {
  form: FormGroup;
  loading = false;
  error = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private dialogRef: MatDialogRef<CreateRestaurantDialogComponent>,
    ) {
    this.form = fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.error = false;
    this.adminService.createRestaurants(this.form.getRawValue()).subscribe((res: any) => {
      this.loading = false;
      this.dialogRef.close(true);
    }, (error: any) => {
      this.loading = false;
      this.error = true;
    })
  }
}
