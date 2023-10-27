import { Component, OnInit } from '@angular/core';
import {callRU, ECallType} from "../../../../shared/enums/call-type.enum";
import {MatDialogRef} from "@angular/material/dialog";
import {MainService} from "../../main.service";
import {ECallStatus} from "../../../../shared/enums/call-status.enum";

@Component({
  selector: 'app-call-dialog',
  templateUrl: './call-dialog.component.html',
  styleUrls: ['./call-dialog.component.scss']
})
export class CallDialogComponent implements OnInit {
  ECallType = ECallType;
  callRU: any = callRU;
  ECallStatus = ECallStatus;
  activeCall: any = {};
  loading = false;
  buttonLoading = false;

  constructor(
    private dialogRef: MatDialogRef<CallDialogComponent>,
    private mainService: MainService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.mainService.getCallStatus().subscribe(res => {
      this.activeCall = res;
      this.loading = false;
    }, error => {
      this.activeCall = {};
      this.loading = false;
    })
  }

  call(type: ECallType) {
    this.buttonLoading = true;
    this.mainService.createCall(type).subscribe(res => {
      this.activeCall = res;
      this.buttonLoading = false;
    })
  }

  cancelCall() {
    this.buttonLoading = true;
    this.mainService.cancelCall().subscribe(res => {
      this.activeCall = {}
      this.buttonLoading = false;
    })
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
