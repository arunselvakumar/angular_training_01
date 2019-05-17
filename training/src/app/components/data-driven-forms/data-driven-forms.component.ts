import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-data-driven-forms',
  templateUrl: '../form/form.component.html',
  styleUrls: ['./data-driven-forms.component.scss']
})
export class DataDrivenFormsComponent implements OnInit {

  formGroup: FormGroup;

  title: FormControl;

  email: FormControl;

  price: FormControl;

  author_name: FormControl;

  constructor() { }

  ngOnInit() {
    this.initializeFormControls();
    this.initializeForm();
  }

  initializeFormControls() {
    this.title = new FormControl('', [Validators.required, Validators.maxLength(5)]);
    this.author_name = new FormControl('', Validators.required);
    this.price = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }

  initializeForm() {
    this.formGroup = new FormGroup({
      title: this.title,
      email: this.email,
      price: this.price,
      author_name: this.author_name
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.formGroup.reset();
    }
  }

}
