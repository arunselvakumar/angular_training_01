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

  constructor() { }

  ngOnInit() {
  }

  callme() {
    console.log('I am Called');
    this.eventHandler.emit({currentValue: 'clicked'});
  }

}
