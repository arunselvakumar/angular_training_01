import { Component, OnInit } from '@angular/core';
import {BookStoreService} from '../../../services/book-store.service';
import {BookModel} from '../../../models/book.model';

@Component({
  selector: 'app-book-store-list',
  templateUrl: './book-store-list.component.html',
  styleUrls: ['./book-store-list.component.scss']
})
export class BookStoreListComponent implements OnInit {

  private bookList: BookModel[];

  constructor(private readonly bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.bookList = this.bookStoreService.getBookList();
  }

}
