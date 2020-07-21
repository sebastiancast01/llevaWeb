import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent} from './components/password/password.component';
import { LoginComponent} from './components/login/login.component';
import {PhoneComponent} from './components/phone/phone.component';
import {HomeComponent} from './components/home/home.component';
import {ConfirmComponent} from './components/phone/confirm/confirm.component';
import {RegisterPersonComponent} from './components/phone/register-person/register-person.component';
import {ChangePasswordComponent} from './components/password/change-password/change-password.component';
import {RegisterEmpresaComponent} from './components/phone/register-empresa/register-empresa.component';
import {AuthGuard} from './services/guards/auth.guard';
import {RegisterAliadoComponent} from './components/register-aliado/register-aliado.component';
import {RegistroComponent} from './components/register-aliado/registro/registro.component';

const routes: Routes = [
  { path: 'password', component: PasswordComponent },
  { path: '', component: LoginComponent },
  {path: 'phone', component: PhoneComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'register-person', component: RegisterPersonComponent},
  {path: 'register-empresa', component: RegisterEmpresaComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'aliado', component: RegisterAliadoComponent},
  {path: 'registro', component: RegistroComponent},
];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }