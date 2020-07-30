import {Injectable} from '@angular/core';
import {IGroup} from "./igroup";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groups: IGroup[] = [
    {
      id: 1,
      name: 'group1'
    },
    {
      id: 2,
      name: 'group2'
    },
    {
      id: 3,
      name: 'group3'
    },
    {
      id: 4,
      name: 'group4'
    }
  ]

  constructor() {
  }

  getAll(): IGroup[] {
    return this.groups;
  }
}
