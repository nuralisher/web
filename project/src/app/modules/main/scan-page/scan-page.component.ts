import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {MainService} from "../main.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-scan-page',
  templateUrl: './scan-page.component.html',
  styleUrls: ['./scan-page.component.scss']
})
export class ScanPageComponent implements OnInit, AfterViewChecked {
  borderVerticalWidth = 0;
  borderHorizontalWidth = 0;
  focusWidth = 300;
  isError = false;
  isLoading = false;
  errorShowTimeout: any;

  constructor(
    private service: MainService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => this.onScan('5e38e9d6-4062-45ec-95cb-d262039b595c'), 4000);
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      this.borderVerticalWidth = (window.innerHeight - this.focusWidth) / 2 + 10.8;
      this.borderHorizontalWidth = (window.innerWidth - this.focusWidth) / 2 + 10.8;
    })
  }

  onScan(result: string) {
    if(this.isLoading) {
      return
    }
    this.isError && clearTimeout(this.errorShowTimeout);
    this.isLoading = true;
    this.service.getTable(result).subscribe(() => {
      this.router.navigate(['/menu'])
      this.isLoading = false;
    }, () => {
      this.isError = true;
      this.errorShowTimeout = setTimeout(() => {
        this.isError = false;
      }, 3000);
      this.isLoading = false;
    });
  }
}
