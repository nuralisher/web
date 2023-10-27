import { Component } from '@angular/core';
import {SharedService} from "./shared/services/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diploma-frontend';

  constructor(
    private sharedService: SharedService
  ) {
  }
}
