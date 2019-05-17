import { Component, OnInit } from '@angular/core';
import {BookStoreDbService} from '../../services/book-store-db.service';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../state/app.state';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../models/user.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-http-in-memory',
  templateUrl: './http-in-memory.component.html',
  styleUrls: ['./http-in-memory.component.scss']
})
export class HttpInMemoryComponent implements OnInit {

  private currencyFormGroup: FormGroup;
  private users$: Observable<UserModel>;

  constructor(private readonly formBuilder: FormBuilder, private readonly userService: UserService) { }

  ngOnInit() {
    this.currencyFormGroup = this.formBuilder.group({
      name: new FormControl(''),
      designation: new FormControl('')
    });

    this.users$ = this.userService.getUser();
  }

  onSubmit() {
    if (this.currencyFormGroup.valid) {
      console.log(this.currencyFormGroup.value);
    }
  }
}
