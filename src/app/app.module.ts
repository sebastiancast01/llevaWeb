import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppMaterialModule } from './app-material.module';
import { PasswordComponent } from './components/password/password.component';
  import {AppRoutingModule} from './app-routing.module';
import { PhoneComponent } from './components/phone/phone.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/home/map/map.component';
import {MatCardModule} from '@angular/material/card';
import { ConfirmComponent } from './components/phone/confirm/confirm.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RegisterPersonComponent } from './components/phone/register-person/register-person.component';
import { ChangePasswordComponent } from './components/password/change-password/change-password.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {GlobalsService} from './globals.service';
import { RegisterEmpresaComponent } from './components/phone/register-empresa/register-empresa.component';
import {AuthGuard} from './services/guards/auth.guard';
import { RegisterAliadoComponent } from './components/register-aliado/register-aliado.component';
import { RegistroComponent } from './components/register-aliado/registro/registro.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { ProfileComponent } from './components/home/profile/profile.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ConfimarServicioComponent } from './components/home/confimar-servicio/confimar-servicio.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordComponent,
    PhoneComponent,
    HomeComponent,
    MapComponent,
    ConfirmComponent,
    RegisterPersonComponent,
    ChangePasswordComponent,
    RegisterEmpresaComponent,
    RegisterAliadoComponent,
    RegistroComponent,
    ProfileComponent,
    HeaderComponent,
    ConfimarServicioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    AppMaterialModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAr5iuFfwQTNln7XY23-tPFys-aNqL-coY',
      libraries: ['places']
    }),
    GooglePlaceModule,
    AgmDirectionModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot()
  ],
  providers: [GlobalsService,
    AuthGuard,
    GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
