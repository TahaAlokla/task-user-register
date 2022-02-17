import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParamMap } from '@angular/router';
import { jobInterested, User } from 'src/app/interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../services/users.service';
@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit {
  Genders=['ذكر','انثى']
  massageSendingForm:string=''
  requiredSelectedLength:number=0
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
    this.massageSendingForm=''
     this.requiredSelectedLength=0
     this.isLoadingSpanner=false

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
    this.requiredSelectedLength=this.jobListInterested.filter(x=>x.isSelected===true).length
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
    if (userRegister.invalid||this.requiredSelectedLength===0) {
      return;
    }

    if (this.mode === "crete") {

      this.requiredSelectedLength=this.jobListInterested.filter(x=>x.isSelected===true).length
      console.log(this.requiredSelectedLength);
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

   this.isLoadingSpanner = true
  this.massageSendingForm="تم ارسال المعلومات "
    userRegister.resetForm()


    } else {
      // this.isLoadingSpanner = true
      // this.postService.updatedPost(this.postId,formPost.value.title, formPost.value.content)
      userRegister.resetForm()
    }
  }

}
