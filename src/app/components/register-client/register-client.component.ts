import { UsersService } from './../../services/users.service';
import { jobInterested } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {

  user:User
  isLoadingSpanner: Boolean = false
  private mode = "crete"
  private userId:any
  jobListInterested:jobInterested[];
  getJobInterested(){
    this.jobListInterested=[
      {id:'1',name:'accountingSoftware',isSelected:false},
      {id:'1',name:'MobileApps',isSelected:false},
      {id:'1',name:'desktopApps',isSelected:false},
      {id:'1',name:'webSites',isSelected:false},
    ]
  }

  constructor(public ActivatedRoute: ActivatedRoute, private UsersService:UsersService) {

    this.jobListInterested=[]
    this.user={} as User
    this.userId=''

  }





  ngOnInit(): void {

    this.getJobInterested()
    this.ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('userId')) {
        this.mode = "edit"
        this.userId = paramMap.get('userId')
        this.isLoadingSpanner = true
      } else {
        this.mode = "crete"
        this.userId = null
      }
    })

  }


  onChangeSelected(){
    console.log(this.jobListInterested);
  }
  fileName = '';
  onFileSelected($event:any){
    const file:File = $event.target.files[0];
    if (file) {
        this.fileName = file.name;
    }
}



  addUser(userRegister: NgForm) {
    if (userRegister.invalid) {
      return;
    }

    if (this.mode === "crete") {
      this.isLoadingSpanner = true
      // form data
      const formData = new FormData()


      formData.append('name', userRegister.value.name);
      formData.append('dateOfBirth', userRegister.value.dateOfBirth);
      formData.append('gender', userRegister.value.gender);
      formData.append("address", userRegister.value.address)
      formData.append("jobDescription", userRegister.value.jobDescription)
      formData.append("phoneNumber", userRegister.value.phoneNumber)
      formData.append("email", userRegister.value.email)
      formData.append("FileImage", this.fileName)
      this.user.jobInterestedSelected=this.jobListInterested.filter(x=>x.isSelected===true).map(x=>x.name)
     
    this.UsersService.addUser(
      userRegister.value.name,
      userRegister.value.email,
    userRegister.value.address,
    userRegister.value.jobDescription,
    userRegister.value.phonenumber,
    userRegister.value.gender,
    userRegister.value.dateOfBirth,
    this.fileName
   ,this.user.jobInterestedSelected)
    userRegister.resetForm()
    } else {
      // this.isLoadingSpanner = true
      // this.postService.updatedPost(this.postId,formPost.value.title, formPost.value.content)
      userRegister.resetForm()
    }
  }
}




