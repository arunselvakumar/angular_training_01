import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookStoreComponent } from './components/book-store/book-store.component';
import { BookStoreListComponent } from './components/book-store/book-store-list/book-store-list.component';
import { BookDetailsComponent } from './components/book-store/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    BookStoreListComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
