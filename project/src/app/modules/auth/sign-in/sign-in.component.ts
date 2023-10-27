import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLoading = false;
  form: FormGroup;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.isLoading = true;
    this.authService.authorize(this.form.get('username')?.value, this.form.get('password')?.value).subscribe(res => {
      const redirectUrl = this.route.snapshot.paramMap.get('redirect') || '';
      // this.router.navigate([redirectUrl])
      this.isLoading = false;
    }, error => {
      this.error = error.toString();
      this.isLoading = false;
    })
  }
}
