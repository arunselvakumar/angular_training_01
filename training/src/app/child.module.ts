import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BookStoreListComponent } from './components/book-store/book-store-list/book-store-list.component';
import { BookDetailsComponent } from './components/book-store/book-details/book-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoterComponent } from './components/voter/voter.component';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {addCoinReducer} from './state/blockchain.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TestData} from './test-data-api';
import {BookStoreComponent} from './components/book-store/book-store.component';

@NgModule({
  declarations: [
    BookStoreListComponent,
    BookDetailsComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot({blockChain: addCoinReducer}),
    StoreDevtoolsModule.instrument({maxAge: 10}),
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [],
  exports: [    BookStoreListComponent,
    BookDetailsComponent,
    VoterComponent]
})
export class ChildModule { }
