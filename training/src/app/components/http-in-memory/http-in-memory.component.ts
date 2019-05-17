import { Component, OnInit } from '@angular/core';
import {BookStoreDbService} from '../../services/book-store-db.service';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';

@Component({
  selector: 'app-http-in-memory',
  templateUrl: './http-in-memory.component.html',
  styleUrls: ['./http-in-memory.component.scss']
})
export class HttpInMemoryComponent implements OnInit {

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
