import { UserLogin } from './interfaces/user-login';

import { Injectable } from '@angular/core'; // at top

@Injectable({
  providedIn: 'root' // just before your class
})
export class FaqUser {
  result: any = {}
  private dataUserLogged = [
    {
      auth: 'admin',
      username: 'admin',
      password: '123'
    },
    {
      auth: 'user',
      username: 'user1',
      password: '12345'
    },
    {
      auth: 'user',
      username: 'user2',
      password: '1234',
    }
  ]
  public searchUser( username: string,password: string):undefined|UserLogin {
  return this.dataUserLogged.find((userArray)=>{
    return  userArray.username === username && userArray.password === password
  })
  }
}
