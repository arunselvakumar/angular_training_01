import { Injectable } from '@angular/core';
import {BookModel} from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor() { }

  getBookList(): BookModel[] {
    const bookList = [
      { author: 'Marcel Proust', title: 'In Search Of Lost Time', availability: 'available' },
      { author: 'Miguel de Cervantes', title: 'Don Quixote' , availability: 'available' },
      { author: 'James Joyce', title: 'Ulysses Part I' , availability: 'not-available' },
      { author: 'James Joyce', title: 'Ulysses Part II' , availability: 'available' },
      { author: 'James Joyce', title: 'Ulysses Part III' , availability: 'not-available' },
   ];
    return bookList;
  }
}
