import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-data-driven-forms',
  templateUrl: '../form/form.component.html',
  styleUrls: ['./data-driven-forms.component.scss']
})
export class DataDrivenFormsComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      email: new FormControl(),
      price: new FormControl(),
      author_name: new FormControl()
    });
  }

}
