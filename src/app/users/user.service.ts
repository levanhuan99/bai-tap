import {Injectable} from '@angular/core';
import {IUser} from "./iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gamil.com',
      group_id: 1
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gamil.com',
      group_id: 3

    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 2

    },
    {
      id: 2,
      name: '1',
      email: 'vinh@gamil.com',
      group_id: 3

    },
    {
      id: 2,
      name: '2',
      email: 'vinh@gamil.com',
      group_id: 3

    },
    {
      id: 2,
      name: '3',
      email: 'vinh@gamil.com',
      group_id: 3

    },
    {
      id: 2,
      name: '4',
      email: 'vinh@gamil.com',
      group_id: 3

    },
    {
      id: 2,
      name: '5',
      email: 'vinh@gamil.com',
      group_id: 3

    },
    {
      id: 2,
      name: '7',
      email: 'vinh@gamil.com',
      group_id: 3

    },
    {
      id: 2,
      name: '8',
      email: 'vinh@gamil.com',
      group_id: 3

    },{
      id: 2,
      name: '9',
      email: 'vinh@gamil.com',
      group_id: 3

    }


  ]

  constructor() {
  }

  getAll(): IUser[] {
    return this.users;
  }

  add(user: IUser): void {
    this.users.push(user);
  }

  // @ts-ignore
  findUserById(id): IUser {
    let user1;
     this.users.map(user => {

      if (id === user.id) {

        user1= user;
      }
    })
    return user1;

    // return  this.users.find(item => item.id == id);
  };
}
