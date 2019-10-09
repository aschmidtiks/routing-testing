import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
users = [
  {
    id: 1,
    name: 'freddy'
  },
  {
    id: 2,
    name: 'louis'
  },
  {
    id: 3,
    name: 'max'
  }
];

}
