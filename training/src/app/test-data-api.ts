import {UserModel} from './models/user.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let userDetails = [
      new UserModel( 'Arun', 'SSE')
    ];

    return { userDetails: userDetails };
  }
}
