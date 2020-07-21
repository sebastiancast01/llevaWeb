import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {


  public phone: number = null;
  public sms_code: number = null;

  public secret_phone: number = null;
  public name: string = null;
  public id: string = null;

  public tipo_registro: number = null;
  public access: string = null;

  public latitud = 0;
  public  longitud = 0;
  public direccion = "";
public distancia=0;
  public  latitud2 = 0;
  public  logitud2 = 0;
  public direccion2 = "";


  setToken(token: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('username', this.name);
    localStorage.setItem('id', this.id);
    this.access = token;
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token ? token : '';
  }

  getId(): string {
    this.id = localStorage.getItem('id');
    return this.id;
  }
  getUser(): string{
    this.name = localStorage.getItem('username');
    return this.name;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
  }

}
