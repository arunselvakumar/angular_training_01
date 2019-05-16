import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookStoreDbService {

  constructor() { }

  loadBookDetails() {

  }

  saveBookDetails(bookDetails) {
    console.log(bookDetails);
  }
}
