import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  defaultBookDetails = {
    title: 'Game Of Thrones',
    email: 'b.arunselvakumar@gmail.com',
    price: '9.99',
    author: 'George RR Martin'
  };

  constructor() { }

  ngOnInit() {
  }

  saveDetails(ngForm: NgForm) {
    console.log(ngForm.value);
  }
}
