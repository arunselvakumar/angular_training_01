import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly httpClient: HttpClient) { }

  isloggedIn() {
    return false;
  }

  createUser(payload: UserModel) {
    const url = 'api/users';
    const httpHeaders = new HttpHeaders()
                            .set('Content-Type', 'application/json');
    const options = { headers: httpHeaders };

    return this.httpClient.post<UserModel>(url, payload, options);
  }

  getUser() {
    const url = 'api/users';
    return this.httpClient.get<UserModel>(url);
  }
}
