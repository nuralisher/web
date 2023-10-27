import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../admin.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.scss']
})
export class CreateCategoryDialogComponent implements OnInit {
  form: FormGroup;
  loading = false;
  error = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private dialogRef: MatDialogRef<CreateCategoryDialogComponent>,
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
    this.adminService.createCategory(this.form.getRawValue()).subscribe((res: any) => {
      this.loading = false;
      this.dialogRef.close(true);
    }, (error: any) => {
      this.loading = false;
      this.error = true;
    })
  }
}
