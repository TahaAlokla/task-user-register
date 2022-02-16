import { StorageUserService } from './storge-user.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private storageUser:StorageUserService) { }






  isLoggedInUser(): boolean {
     console.log( this.storageUser.getUser());
    return !! Object.keys(this.storageUser.getUser()).length
  }

  isLoggedInAdmin(): boolean {
    if(this.storageUser.getUser().auth==="admin"){

      return true
    }else{

      return false
    }
    // return !! (this.storageUser.getUser().auth==="admin")
  }
}
