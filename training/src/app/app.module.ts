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
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {InMemoryDbService, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TestData} from './test-data-api';
import {ChildModule} from './child.module';
import { ContentProjectionDemoComponent } from './components/content-projection-demo/content-projection-demo.component';
import { ProjectionChildComponent } from './components/content-projection-demo/projection-child/projection-child.component';
import { LoginComponent } from './components/day-05/login/login.component';
import { RegisterComponent } from './components/day-05/register/register.component';
import { UserDetailsComponent } from './components/day-05/user-details/user-details.component';
import { PortfolioComponent } from './components/day-05/portfolio/portfolio.component';
import { LandingPageComponent } from './components/day-05/landing-page/landing-page.component';
import {MyRouting} from './app.routing';
import {ChildRouting} from './child.routing';
import { SearchComponent } from './components/day-05/search/search.component';
import { HeaderComponent } from './components/day-05/header/header.component';
import { ArtistTrackListComponent } from './components/day-05/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './components/day-05/artist-album-list/artist-album-list.component';
import { ArtistVideoListComponent } from './components/day-05/artist-video-list/artist-video-list.component';
import { ArtistComponent } from './components/day-05/artist/artist.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: LandingPageComponent },
  { path: "find", redirectTo: "search" },
  { path: "search", component: SearchComponent },
  {
    path: "artist/:artistId",
    component: ArtistComponent,
    children: [
      { path: "", redirectTo: "tracks", pathMatch: "full" },
      { path: "tracks", component: ArtistTrackListComponent },
      { path: "albums", component: ArtistAlbumListComponent },
      { path: "videos", component: ArtistVideoListComponent }
    ]
  },
  { path: "**", component: LandingPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    CreditCardDirective,
    FormComponent,
    DataDrivenFormsComponent,
    StateDemoComponent,
    CoinsDisplayComponent,
    HttpInMemoryComponent,
    ContentProjectionDemoComponent,
    ProjectionChildComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailsComponent,
    PortfolioComponent,
    LandingPageComponent,
    SearchComponent,
    HeaderComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    ArtistVideoListComponent,
    ArtistComponent
  ],
  imports: [
    ChildModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    StoreModule.forRoot({blockChain: addCoinReducer}),
    StoreDevtoolsModule.instrument({maxAge: 10}),
    InMemoryWebApiModule.forRoot(TestData),
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
