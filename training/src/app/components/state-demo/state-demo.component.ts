import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {BlockchainModel} from '../../models/blockchain.model';

@Component({
  selector: 'app-state-demo',
  templateUrl: './state-demo.component.html',
  styleUrls: ['./state-demo.component.scss']
})
export class StateDemoComponent implements OnInit {

  private currencyFormGroup: FormGroup;

  constructor(private readonly store: Store<AppState>) { }

  ngOnInit() {
    this.currencyFormGroup = new FormGroup({
      name: new FormControl(''),
      value: new FormControl('')
    });
  }

  onSubmit() {
    if (this.currencyFormGroup.valid) {
      this.store.dispatch({ type: 'ADD_COIN', payload: this.currencyFormGroup.value });
    }
  }

}
