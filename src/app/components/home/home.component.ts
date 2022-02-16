import { StorageUserService } from './../../services/storge-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storageService:StorageUserService ) { }

  ngOnInit(): void {
  }

  logout(){
    this.storageService.signOut()
  }

  // public isAuthenticated = false;



}
