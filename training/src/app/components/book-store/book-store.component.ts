import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss']
})
export class BookStoreComponent implements OnInit {

  imageUrl: string;

  greetings = 'Hello World';

  constructor() { }

  ngOnInit() {
  }

  eventListener(args: any){
    console.log(args);
  }
}
