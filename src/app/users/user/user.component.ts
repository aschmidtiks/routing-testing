import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {query} from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramSubscription: Subscription;

  allowEdit = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.params.name
    };
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = params.name;
      }
    );
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams.allowEdit === '1' ? true : false;
      }
    );
  }
}
