import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookStoreComponent } from './components/book-store/book-store.component';
import { BookStoreListComponent } from './components/book-store/book-store-list/book-store-list.component';
import { BookDetailsComponent } from './components/book-store/book-details/book-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoterComponent } from './components/voter/voter.component';
import { BackgroundColorDirective } from './directives/background-color/background-color.directive';
import { CreditCardDirective } from './directives/credit-card/credit-card.directive';
import { FormComponent } from './components/form/form.component';
import {HttpModule} from '@angular/http';
import { DataDrivenFormsComponent } from './components/data-driven-forms/data-driven-forms.component';
import { StateDemoComponent } from './components/state-demo/state-demo.component';
import {StoreModule} from '@ngrx/store';
import {addCoinReducer} from './state/blockchain.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { CoinsDisplayComponent } from './components/coins-display/coins-display.component';
import { HttpInMemoryComponent } from './components/http-in-memory/http-in-memory.component';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDbService, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TestData} from './test-data-api';
import {ChildModule} from './child.module';

@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    CreditCardDirective,
    FormComponent,
    DataDrivenFormsComponent,
    StateDemoComponent,
    CoinsDisplayComponent,
    HttpInMemoryComponent
  ],
  imports: [
    ChildModule,
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
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
