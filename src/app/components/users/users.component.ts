import { Component, OnInit } from '@angular/core';
import { FaqUser } from 'src/app/faq.user';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
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
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit(): void {
    this.userSub = this.userService.getUserUpDateListener().subscribe((users:User[])=>{
      this.usersList = users
      console.log('users',this.usersList);

      this.dataSource = users
    })


  }


}
