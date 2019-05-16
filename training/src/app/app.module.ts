import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookStoreComponent } from './components/book-store/book-store.component';
import { BookStoreListComponent } from './components/book-store/book-store-list/book-store-list.component';
import { BookDetailsComponent } from './components/book-store/book-details/book-details.component';
import {FormsModule} from '@angular/forms';
import { VoterComponent } from './components/voter/voter.component';
import { BackgroundColorDirective } from './directives/background-color/background-color.directive';
import { CreditCardDirective } from './directives/credit-card/credit-card.directive';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    BookStoreListComponent,
    BookDetailsComponent,
    VoterComponent,
    BackgroundColorDirective,
    CreditCardDirective,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
