import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class DataAccessService {

  user: User;
  constructor() {
    this.user = new User();
  }

  getUser(): User {
    this.user.firstName = 'Mohammad';
    this.user.lastName = 'Ahsan';
    this.user.email = 'm.ahsan9981@gmail.com';
    this.user.contactNumber = '+923445560448';

    return this.user;
  }

}
