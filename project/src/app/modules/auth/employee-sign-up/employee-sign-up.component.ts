import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-sign-up',
  templateUrl: './employee-sign-up.component.html',
  styleUrls: ['./employee-sign-up.component.scss']
})
export class EmployeeSignUpComponent implements OnInit {
  form: FormGroup;
  loading = false;
  passwordConfirmError = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.form = fb.group({
      last_name: ['', Validators.required],
      first_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password1: ['', [Validators.minLength(8), Validators.required]],
      password2: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.authService.employeeRegistration(this.form.getRawValue()).subscribe(res => {
      this.loading = false;debugger
      this.router.navigate(['/admin/restaurants'])
    }, error => {
      this.error = error.error[Object.keys(error.error)[0]][0]
      console.log(this.error);
      this.loading = false;
    })
  }

  onConfirmPassword() {
    let password1 = this.form.get('password1')?.value;
    let password2 = this.form.get('password2')?.value;
    if(password1!==password2 && (this.form.get('password2')?.touched || password2)) {
      this.passwordConfirmError = true;
    } else {
      this.passwordConfirmError = false;
    }
  }
}
