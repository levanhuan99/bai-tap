import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  keyWord:string;
  constructor() { }

  ngOnInit(): void {
  }
  getInput(value){
    this.keyWord=value.target.value;
  }

}
