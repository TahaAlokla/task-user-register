import { UsersService } from './../../services/users.service';

import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { StorageUserService } from 'src/app/services/storge-user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  linksName = {
    home: 'الصفحة الرئيسية ',
    sinOut: 'تسجيل خروج ',
    login: 'تسجيل الدخول ',
    adminControls: 'لوحة التحكم ',
    usersTable: 'بيانات المستخدمين '
  }
  isLoggedIn$!: Observable<boolean>;
  isLoggedInAdmin$!: Observable<boolean>;

  private roles: string = '';


  constructor(private storageService: StorageUserService, private authUser: AuthServiceService  ,  private userService  :  UsersService) { }

  ngOnInit(): void {
   this.isLoggedIn$ = this.userService.isLoggedIn
   this.isLoggedInAdmin$ = this.userService.isLoggedInAdminObs
  }



  logout() {
    this.storageService.signOut()
  }

}
