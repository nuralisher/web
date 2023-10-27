import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdminService} from "../../admin.service";
import {callStatusRU, ECallStatus} from "../../../../shared/enums/call-status.enum";
import {callRU} from "../../../../shared/enums/call-type.enum";

@Component({
  selector: 'app-call-detail',
  templateUrl: './call-detail.component.html',
  styleUrls: ['./call-detail.component.scss']
})
export class CallDetailComponent implements OnInit {
  buttonLoading = false;
  ECallStatus = ECallStatus;
  callStatusRU: any = callStatusRU;
  callRU: any = callRU;

  constructor(
    private adminService: AdminService,
    private dialogRef: MatDialogRef<CallDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  closeDialog() {
    this.dialogRef.close()
  }

  closeCall() {
    this.buttonLoading = true;
    this.adminService.closeCall(this.data.table_id).subscribe(res => {
      this.dialogRef.close(true);
    })
  }

}
