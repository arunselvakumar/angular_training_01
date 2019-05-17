import {UserModel} from './models/user.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    const users = [
      new UserModel( 'Arun', 'SSE'),
      new UserModel( 'Selva', 'SSE'),
      new UserModel( 'Kumar', 'SSE'),
    ];

    return { users: users };
  }
}
