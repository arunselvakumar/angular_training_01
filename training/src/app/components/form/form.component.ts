import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {BookStoreDbService} from '../../services/book-store-db.service';

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

  constructor(private readonly bookStoreDbService: BookStoreDbService) { }

  ngOnInit() {
  }

  loadBookDetails() {
    this.bookStoreDbService.loadBookDetails()
                           .subscribe(data => console.log(data));
  }

  saveBookDetails(ngForm: NgForm) {
    if (ngForm.value) {
      this.bookStoreDbService.saveBookDetails(ngForm.value)
                             .subscribe(data => console.log(data));
    }
  }
}
