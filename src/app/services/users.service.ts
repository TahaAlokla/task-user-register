import { jobInterested } from './../interfaces/user';
import { AuthServiceService } from './auth-service.service';
import { StorageUserService } from './storge-user.service';
import { FaqUser } from 'src/app/faq.user';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // usersArray: User[] = []
  userLoginData: any = {}
  constructor(private FaqUser: FaqUser, private StorageUser: StorageUserService, private authService: AuthServiceService, private router: Router) { }


  private users: User[] = [
    {
      name: 'taha',
      dateOfBirth: '2022-11-1',
      phoneNumber: '0968825014',
      address: '',
      jobDescription: 'gggggggggggggggg',
      gender: 'male',
      email: 'taha.com',
      jobInterestedSelected: ['websites'],
      id: '123456'
    }
  ]
  private userUpdate = new Subject<User[]>()
  //
  getUserUpDateListener() {
    return this.userUpdate.asObservable()
  }
  //  console.log(ARG[0]);
  addUser(...params: any) {
    // console.log(jobInterested);
    const newUser: User = {
      name: params[0],
      email: params[1],
      address: params[2],
      jobDescription: params[3],
      phoneNumber: params[4],
      gender: params[5],
      dateOfBirth: params[6],
      photo: params[7],
      jobInterestedSelected: params[8],
      id: Math.floor(Math.random() * Date.now()).toString()
    }
    console.log(newUser);
    this.users.push(newUser)
    this.userUpdate.next([...this.users])
    this.router.navigate(['/users'])

    // console.log(params[0]);
    //  console.log(params);
    //  this.users.push()
  }



  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private loggedInAdmin = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  get isLoggedInAdminObs() {
    return this.loggedInAdmin.asObservable(); // {2}
  }

  //   this.loggedInAdmin.next(false);



  loginUser(username: string, password: string): any {
    console.log("username :", username, "password: ", password);
    this.userLoginData = this.FaqUser.searchUser(username, password)
    if (this.userLoginData === undefined) {
      this.loggedIn.next(false);
      this.loggedInAdmin.next(false);
      return false
    }
    else {
      // testing
      // console.log("this.userLoginData", this.userLoginData);
      this.StorageUser.saveUser(this.userLoginData)
      if (this.authService.isLoggedInAdmin()) {
        this.loggedInAdmin.next(true);
      }
      this.loggedIn.next(true);
      return true
    }
  }
}
