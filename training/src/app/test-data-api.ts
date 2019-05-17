import {UserModel} from './models/user.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    const users = [
      new UserModel( 'Name 1', 'SE'),
      new UserModel( 'Name 2', 'SSE'),
      new UserModel( 'Name 3', 'PSE'),
    ];

    return { users: users };
  }
}
