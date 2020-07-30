import {Component, OnInit} from '@angular/core';
import {IUser} from "../iuser";
import {UserService} from "../user.service";
import {IGroup} from "../../groups/igroup";
import {GroupService} from "../../groups/group.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // userService:UserService;
  title_page = 'Users'
  users: IUser[] = [];
  groups:IGroup[]=[];

  // userFilter = [];

  constructor(private userService:UserService,private  groupService:GroupService) {
  }

  ngOnInit(): void {
    this.users = this.getUserList();
    this.groups=this.getGroups();
  }

  getUserList(): IUser[] {
    let users1 =this.userService.getAll();
    return users1;
  }

  search(event) {
    let keyword = event.target.value;
    this.users = (keyword) ? this.filerByKeyword(keyword) : this.getUserList();
  }

  filerByKeyword(keyword) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) != -1;    //nếu keyword trùng tên user thì sẽ trả về 1 list danh sách các user có tên chứa keyword
    })
  }


  delete(id) {

    // for (let i = 0; i < this.userFilter.length; i++) {       đây là cách 1 để xóa user
    //   if (id == this.userFilter[i].id) {
    //     this.userFilter.splice(i, 1);
    //     // console.log(this.users[i].name +" deleted")
    //     console.log(this.userFilter.length);
    //   }
    // }



    let userDeleted = [];                             //đây là cách 2 để xóa user
    this.users.map(user => {      //dùng map để duyệt mảng  context1: string='';

      if(user.id != id){
        userDeleted.push(user);
      }
    })
    this.users = userDeleted;   //cuối cùng thì sẽ có 1 mảng user trừ user có id khi delete.
  }


  getGroups():IGroup[]{
    return this.groupService.getAll();
  }

}
