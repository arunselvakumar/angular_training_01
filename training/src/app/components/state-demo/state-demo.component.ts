import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
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

  constructor(
    private readonly store: Store<AppState>,
    private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.currencyFormGroup = this.formBuilder.group({
      name: new FormControl(''),
      value: new FormControl('')
    });
  }

  onSubmit() {
    if (this.currencyFormGroup.valid) {
      console.log(this.currencyFormGroup.value);
      this.store.dispatch({ type: 'ADD_COIN', payload: this.currencyFormGroup.value });
    }
  }

}
