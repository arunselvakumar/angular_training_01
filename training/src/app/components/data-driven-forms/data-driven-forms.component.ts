import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

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

  reservedTitles = ['Song of Ice and Fire', 'Winds of Winter'];

  hobbies: FormArray;

  constructor() { }

  ngOnInit() {
    this.initializeFormControls();
    this.initializeForm();
  }

  initializeFormControls() {
    this.title = new FormControl('', [Validators.required, this.validateReservedTitles.bind(this)]);
    this.author_name = new FormControl('', Validators.required);
    this.price = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.hobbies = new FormArray([]);
  }

  initializeForm() {
    this.formGroup = new FormGroup({
      title: this.title,
      email: this.email,
      price: this.price,
      author_name: this.author_name,
      hobbies: this.hobbies
    });
  }

  validateReservedTitles(control: FormControl): {[s: string]: boolean} {
    if (this.reservedTitles.indexOf(control.value) !== -1) {
      return {'reservedTitle': true};
    }
    return null;
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.formGroup.reset();
    }
  }

  onAddHobby() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.formGroup.get('hobbies')).push(control);
  }

}
