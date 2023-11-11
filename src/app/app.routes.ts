import { Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {TasksPageComponent} from "./components/tasks-page/tasks-page.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {RegisterPageComponent} from "./components/register-page/register-page.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";

export const routes: Routes = [
  {path: '', redirectTo: '/Main',pathMatch:'full'},
  {path:'Main', component: MainPageComponent},
  {path:'Tasks', component: TasksPageComponent},
  {path:'Login', component: LoginPageComponent},
  {path:'Register', component: RegisterPageComponent},
  {path:'**', component:NotFoundPageComponent}
];
