import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
// const TOKEN_KEY = '';
// const Admin_KEY = "auth-admin"
const USER_KEY = '';
@Injectable({
  providedIn: 'root'
})
export class StorageUserService {

  constructor() { }
  // logout user from session
  signOut(): void {
    localStorage.clear();
   location.reload();
  }


   // save user
   public saveUser(user: User): void {
    //  localStorage
   localStorage.removeItem(USER_KEY);
   localStorage.setItem(USER_KEY,JSON.stringify(user));
    console.log("after set user ", JSON.stringify(user));
  }

   // get User
   public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    console.log('get user from local ', user);

    if (user) {
      return JSON.parse(user);
    }
    return {};
  }


}
