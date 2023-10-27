import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallDialogComponent } from '../modules/main/dialogs/call-dialog/call-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
