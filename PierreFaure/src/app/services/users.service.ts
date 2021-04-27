import { User } from './../models/users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from '../models/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URI}/usuarios`);
  }

  getUser(id :string){
    return this.http.get(`${this.API_URI}/usuarios/${id}`);
  }

  deleteUser(id :string){
    return this.http.delete(`${this.API_URI}/usuarios/${id}`);
  }

  saveUser(users: User){
    return this.http.post(`${this.API_URI}/usuarios`, users);
  }

  updateUser(id :string | number, updatedUser: User){
    return this.http.put(`${this.API_URI}/usuarios/${id}`, updatedUser);
  }
}
