import { AuthServiceService } from './../../services/auth-service.service';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  hide=true
  form: any = {
    username: null,
    password: null
  };
   public isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  massagesForForm={
    passwordIsRequired:'كلمة المرور مطلوبة',
    usernameIsRequired:'اسم المستخدم مطلوب '
  }

  constructor(private UserService: UsersService , private router:Router ,
    private authService:AuthServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(): any {
    const { username, password } = this.form;
    console.log("username :", username, "password: ", password);
    let resultLogin = this.UserService.loginUser(username, password)
    if (resultLogin === true) {
      this.isLoggedIn = true
      this.isLoginFailed = false;
      this.errorMessage=""
      this.router.navigate(['/'])
      return
    } else {
      // console.log('something error username or password !!');
      this.errorMessage = " something error username or password !! "
      this.isLoginFailed = true
    }

  }

}
