import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input()
  mydata: string;

  @Output()
  eventHandler = new EventEmitter();

  items: ItemModel[]

  constructor() { }

  ngOnInit() {
    this.items = [
      {id: '1', name: 'Arun'},
      {id: '2', name: 'Selva'},
      {id: '3', name: 'Kumar'},
    ];
  }

  callme() {
    console.log('I am Called');
    this.eventHandler.emit({currentValue: 'clicked'});
  }

}

export interface ItemModel {
  id: string;
  name: string;
}
