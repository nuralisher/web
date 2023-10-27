import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = fb.group({
      username: '',
      password1: '',
      password2: '',
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.authService.clientRegistration(this.form.getRawValue()).subscribe(res => {
      this.loading = false;
      this.router.navigate(['/'])
    }, error => {
      this.error = error.error[Object.keys(error.error)[0]][0]
      console.log(this.error);
      this.loading = false;
    })
  }
}
