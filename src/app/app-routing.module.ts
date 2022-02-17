import { AdminBoardComponent } from './components/admin-board/admin-board.component';
import { AdminGuard } from './guards/admin.guard';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminModuleModule } from './modules/admin-module/admin-module.module';
import { UsersComponent } from './components/users/users.component';

import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
   redirectTo: 'home', pathMatch: 'full',
  },
  { path: 'home',
  canActivate: [AuthGuard],
   component: HomeComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'users',
    canActivate: [AuthGuard],
    component: UsersComponent
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: AdminBoardComponent
  },
  // lazy loading admin section

  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
