import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBoardComponent } from 'src/app/components/admin-board/admin-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    // AdminBoardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
  ]
})
export class AdminModuleModule { }
