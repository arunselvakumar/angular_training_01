import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-state-demo',
  templateUrl: './state-demo.component.html',
  styleUrls: ['./state-demo.component.scss']
})
export class StateDemoComponent implements OnInit {

  private currencyFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.currencyFormGroup = new FormGroup({
      name: new FormControl(''),
      value: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.currencyFormGroup.value);
  }

}
