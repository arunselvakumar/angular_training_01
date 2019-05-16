import { Injectable } from '@angular/core';
import {BookModel} from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor() { }

  getBookList(): BookModel[] {
    const bookList = [
      { author: 'Marcel Proust', title: 'In Search Of Lost Time' },
      { author: 'Miguel de Cervantes', title: 'Don Quixote' },
      { author: 'James Joyce', title: 'Ulysses' },
   ];
    return bookList;
  }
}
