import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../admin.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-table-dialog',
  templateUrl: './create-table-dialog.component.html',
  styleUrls: ['./create-table-dialog.component.scss']
})
export class CreateTableDialogComponent implements OnInit {
  form: FormGroup;
  loading = false;
  error = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private dialogRef: MatDialogRef<CreateTableDialogComponent>,
  ) {
    this.form = fb.group({
      number: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.error = false;
    this.adminService.createTable(this.form.getRawValue()).subscribe(res => {
      this.loading = false;
      this.dialogRef.close(true);
    }, error => {
      this.loading = false;
      this.error = true;
    })
  }
}
