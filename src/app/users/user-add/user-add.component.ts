import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../user.service";
import {IGroup} from "../../groups/igroup";
import {GroupService} from "../../groups/group.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  newUSer: FormGroup;
  groups: IGroup[] = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private groupService: GroupService,private router:Router) {
  }

  ngOnInit(): void {
    this.newUSer = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      group_id:['']
    })
    this.groups=this.getGroups();
  }

  create() {
    let data = this.newUSer.value;
    data.group_id= +data.group_id;
    this.userService.add(data);
    this.router.navigate(['users']);
    console.log(this.userService.getAll());

  }

  // get name() {
  //   return this.newUSer.get('name');
  // }
  //
  // get email() {
  //   return this.newUSer.get('email');        get này để làm gì ?
  // }

  getGroups(): IGroup[] {
    return this.groupService.getAll();
  }
}
