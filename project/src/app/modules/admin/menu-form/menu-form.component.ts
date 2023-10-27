import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent implements OnInit {
  form: FormGroup;
  loading = false;
  error = false;
  categories: any[] = [];

  @ViewChild('fileInput') fileInput: any
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.adminService.getRestaurantCategories().subscribe((res: any) => {
      this.categories = res;
    })
  }

  onSubmit() {
    this.loading = true;
    const data = {
      ...this.form.getRawValue(),
      image: this.fileInput.nativeElement.files[0],
    }
    let form_data = new FormData();
    form_data.set('category', data.category)
    form_data.set('price', data.price)
    form_data.set('description', data.description)
    form_data.set('image', data.image, data.image.name);
    form_data.set('name', data.name)
    console.log(form_data);
    this.adminService.createMenu(form_data).subscribe(res => {
      this.router.navigate(['/admin/menu']);
      this.loading = false;
    }, error => {
      this.loading = false;
    })
  }

  fileChange(event: any) {
    console.log(event)
  }
}
