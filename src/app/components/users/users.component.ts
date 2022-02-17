import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UsersService) {
    this.dataSource = []as User[]

  }
  userSub: Subscription | undefined;
   usersList:User[]|undefined;
    dataSource :User[]
     displayedColumns: string[] = ['name', 'address', 'email'];

  ngOnInit(): void {

    console.log();

    this.userSub = this.userService.getUserUpDateListener().subscribe((usersData)=>{
      console.log('test users component !!',usersData);
      this.usersList = usersData
      // console.log('users',this.usersList);
      this.dataSource = usersData
    },err=>{
      console.log(err);

    })
  }


}
