import { Calendario } from './../models/calendario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getCalendarios(){
    return this.http.get(`${this.API_URI}/admin`);
  }

  // tslint:disable-next-line: typedef
  getCalendario(id: string){
    return this.http.get(`${this.API_URI}/admin/${id}`);
  }

  // tslint:disable-next-line: typedef
  deleteCalendario(id: string){
    return this.http.delete(`${this.API_URI}/admin/${id}`);
  }

  // tslint:disable-next-line: typedef
  saveCalendario(calendarios: Calendario){
    return this.http.post(`${this.API_URI}/admin`, calendarios);
  }

  updateCalendario(id: string|number, updatedUser: Calendario): Observable<Calendario>{
    return this.http.put(`${this.API_URI}/admin/${id}`, updatedUser);
  }
}
