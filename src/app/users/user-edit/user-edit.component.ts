import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IGroup} from "../../groups/igroup";
import {GroupService} from "../../groups/group.service";
import {IUser} from "../iuser";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  newUSer: FormGroup;
  groups: IGroup[] = [];
  idFromUrl: number;

  users: IUser[] = [];

  userEdit: IUser;

  constructor(private activatedRoute: ActivatedRoute, private groupService: GroupService, private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.idFromUrl = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.users = this.getAllUser();
    this.userEdit = this.getUserById();

    this.newUSer = this.formBuilder.group({
      id: [this.userEdit.id],
      name: [this.userEdit.name],
      email: [this.userEdit.email],
      group_id: [this.userEdit.group_id]
    })


    this.groups = this.getGroups();

  }

  save() {
    let data = this.newUSer.value;
    data.group_id = +data.group_id;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == this.idFromUrl) {
        this.users[i] = data;
        console.log(data);
      }
    }
    this.router.navigate(['users']);
    console.log(this.userService.getAll());
  }

  getGroups(): IGroup[] {
    return this.groupService.getAll();
  }

  getUserById(): IUser {
    return this.userService.findUserById(this.idFromUrl);
  }

  getAllUser(): IUser[] {
    return this.userService.getAll();
  }
}
