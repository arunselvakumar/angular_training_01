import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class BookStoreDbService {

  constructor(private http: Http) { }

  loadBookDetails() {

  }

  saveBookDetails(bookDetails: any) {
    const body = JSON.stringify(bookDetails);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://taskmanager-25b59.firebaseio.com/mf.json', body, { headers: headers})
                    .map((data: Response) => data.json());
  }
}
