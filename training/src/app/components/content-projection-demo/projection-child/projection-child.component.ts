import {Component, Input, OnInit} from '@angular/core';

export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'app-projection-child',
  templateUrl: './projection-child.component.html',
  styleUrls: ['./projection-child.component.scss']
})
export class ProjectionChildComponent implements OnInit {

  @Input('joke') data: Joke;

  constructor() { }

  ngOnInit() {
  }

}
