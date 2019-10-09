import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', canActivateChild: [AuthGuard], component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]}
];

@NgModule({
imports:[
  RouterModule.forRoot(routes)
],
exports: [RouterModule]
})

export class AppRoutingModule {
}
