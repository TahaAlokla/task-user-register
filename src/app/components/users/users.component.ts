import { User } from './../../interfaces/user';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { UsersService } from 'src/app/services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {



  constructor(private userService: UsersService, private _liveAnnouncer: LiveAnnouncer) {
    this.dataSource = [] as User[]
    this.sort={} as MatSort

  }
  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit() {
    this.dataSource1.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  userSub: Subscription | undefined;
  usersList: User[] | undefined;
  dataSource: User[]
  displayedColumns: string[] = ['email', 'name', 'phone', 'date'];

  ngOnInit(): void {
    // static data
    this.dataSource = this.userService.getUsers()


    // not working !
    this.userSub = this.userService.getUserUpDateListener().subscribe((usersData) => {
      console.log('test users component !!', usersData);
      this.usersList = usersData
      // console.log('users',this.usersList);
      this.dataSource = usersData
    }, err => {
      console.log(err);

    })
  }

  dataSource1 = new MatTableDataSource(this.userService.getUsers());
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }


}
