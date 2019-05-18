import { Component, OnInit } from '@angular/core';
import {Joke} from './projection-child/projection-child.component';

@Component({
  selector: 'app-content-projection-demo',
  templateUrl: './content-projection-demo.component.html',
  styleUrls: ['./content-projection-demo.component.scss']
})
export class ContentProjectionDemoComponent implements OnInit {

  ngOnInit() {
  }

  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }

}
